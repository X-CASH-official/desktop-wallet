import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { Wallet } from 'src/app/models/wallet.model';
import { Contact } from 'src/app/models/contact.model';
import { Observable, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ContactListService } from 'src/app/services/contact-list.service';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { ConstantsService } from 'src/app/services/constants.service';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';

@Component({
  selector: 'app-wallet-send-modal',
  templateUrl: './wallet-send-modal.component.html',
  styleUrls: ['./wallet-send-modal.component.scss']
})
export class WalletSendModalComponent implements OnInit {

  contacts: Contact[];
  contactListSubscription: Subscription;
  sendPaymentData:object;
  data:string;
  fee:number;
  total:number;
  tx:any = {};
  send_settings:number;
  send_usd_amount_number:number = 0;
  send_xcash_amount_number:number = 0;

  constructor(private validatorsRegexService: ValidatorsRegexService, 
    private contactListService: ContactListService, 
    private constantsService: ConstantsService,
    private RpcCallsService: RpcCallsService) {
  }

  @Input() walletData: Wallet;
  @Input() USDforXCASH: number;

  @ViewChild('sendModal', { static: true }) sendModal: UiModalComponent;
  @ViewChild('sendConfirmationModal', { static: true }) sendConfirmationModal: UiModalComponent;
  @ViewChild('sendPaymentModalError', { static: true }) sendPaymentModalError: UiModalComponent;
  @ViewChild('sendPaymentModalSuccess', { static: true }) sendPaymentModalSuccess: UiModalComponent;
  @ViewChild('send_xcash_amount', {static: true}) send_xcash_amount: ElementRef;
  @ViewChild('send_usd_amount', {static: true}) send_usd_amount: ElementRef;

  sendForm = new FormGroup({
    recipient: new FormControl('', [Validators.required, Validators.pattern(this.validatorsRegexService.xcash_address)]),
    paymentId: new FormControl('', [Validators.pattern(this.validatorsRegexService.payment_id)]),
    maxAmount: new FormControl(false, [Validators.required]),
    amount: new FormControl('', [Validators.required, Validators.pattern(this.validatorsRegexService.xcash_amount)]),
    privacy: new FormControl('private', [Validators.required]),
  });
  get recipient() {
    return this.sendForm.get('recipient');
  }
  get paymentId() {
    return this.sendForm.get('paymentId');
  }
  get maxAmount() {
    return this.sendForm.get('maxAmount');
  }
  get amount() {
    return this.sendForm.get('amount');
  }
  get privacy() {
    return this.sendForm.get('privacy');
  }

  ngOnInit() {
    this.contactListSubscription = this.contactListService.getContactList().subscribe(contacts => {
      this.contacts = contacts;
    });
    setInterval(() => {  
      if (this.send_settings === 0)   
      {
        this.send_usd_amount_number = this.send_xcash_amount.nativeElement.value * this.USDforXCASH;
      } 
      else if (this.send_settings === 1)   
      {
        this.send_xcash_amount_number = this.send_usd_amount.nativeElement.value / this.USDforXCASH;
        this.amount.setValue(this.send_xcash_amount_number.toFixed(6));
      }
    },100);
  }

  ngOnDestroy() {
    this.contactListSubscription.unsubscribe();
  }

  // This is trigger right before an item is selected from the result list and prevent the default behavior
  onSelectionContact(selectedItem: NgbTypeaheadSelectItemEvent) {
    // Prevent the default behavior, normally the input will be setValue to the Object
    selectedItem.preventDefault();
    this.recipient.setValue(selectedItem.item.address);
  }
  
  searchContact = (text$: Observable<string>) =>
    text$.pipe(
      //debounceTime(200), // We can introduce a slight delay here, this is a question of user experience
      distinctUntilChanged(),
      map(term => {
        // We want to search the address of the contact list only if the input is long enough to prevent strange suggestion when typing just some letters
        if (term.length > 0 && term.length < this.constantsService.xcash_public_address_length) {
          return this.contacts.filter(contact => (contact.name).toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
        } else if (term.length > 0) {
          // This is to signal the user that the address he/she probably copy paste is in his/her contact list
          return this.contacts.filter(contact => (contact.name+contact.address).toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
        } else {
          // without this case, if the user inputs things then delete them, they are presented with all the contact list
          return []
        }
      }),
    )

  savedAmountValue: string = '';

  onMaxAmountSwitchClick(isChecked: boolean) {
    if (isChecked) {
      try {
        this.savedAmountValue = this.amount.value;
        this.amount.setValue(this.walletData.balance);
        this.amount.disable();
      } catch (e) {
        console.error('Because of illegal navigation:',e);
      }
    } else {
      this.amount.setValue(this.savedAmountValue);
      this.amount.enable();
    }
  }

  async onSubmitSendForm() {
    if (this.sendForm.valid) {
      this.sendModal.hide();
      this.sendPaymentData = this.sendForm.value;
      
      // get the transaction fee and total
      console.log(this.sendPaymentData);
      let data2:any = await this.RpcCallsService.sendPayment(this.sendPaymentData,true);
      console.log(data2);
      if (data2.status === "success")
      {
        this.fee = data2.fee;
        this.total = data2.total;
        this.sendConfirmationModal.show();
      }
      else
      {
        this.data = data2.status;
        this.sendPaymentModalError.show();
      }
    } else {
      this.recipient.markAsTouched();
    }
  }

  async sendPayment()
  {
   this.tx = await this.RpcCallsService.sendPayment(this.sendPaymentData,false);
   this.sendPaymentModalSuccess.show();
  }

  sendConfirmationLoading: boolean = false;

  simulateLoadingThenHide(modalElement: UiModalComponent, loadingTime: number, hidingBooleanName: string) {
    // I'm sure there's a way to avoid this
    this[hidingBooleanName] = true;
    setTimeout(() => {
      modalElement.hide();
      setTimeout(() => {
        this[hidingBooleanName] = false;
      }, 300); // The time of the modal hiding animation
    }, loadingTime);
  }

  public show() {
    this.sendModal.show();
  }

}

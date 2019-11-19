import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { Wallet } from 'src/app/models/wallet.model';

@Component({
  selector: 'app-wallet-send-modal',
  templateUrl: './wallet-send-modal.component.html',
  styleUrls: ['./wallet-send-modal.component.scss']
})
export class WalletSendModalComponent implements OnInit {

  constructor(private validatorsRegexService: ValidatorsRegexService) { }

  @Input() walletData: Wallet;

  @ViewChild('sendModal') sendModal: UiModalComponent;
  @ViewChild('sendConfirmationModal') sendConfirmationModal: UiModalComponent;

  sendForm = new FormGroup({
    recipient: new FormControl('', [Validators.required]),
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
  }

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

  onSubmitSendForm() {
    if (this.sendForm.valid) {
      this.sendModal.hide();
      console.log(this.sendForm);
      // Do some stuff before recap?
      // Treat the max amount case here please : enable amount and set it to the max
      this.sendConfirmationModal.show();
    } else {
      this.recipient.markAsTouched();
    }
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

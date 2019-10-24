import { Component, OnInit, ViewChild } from '@angular/core';

import { FAKE_CONTACTS } from 'src/fake-data/fake-contacts';
import { Subject } from 'rxjs';
import { ContactList } from 'src/app/models/contact-list.model';
import { Contact } from 'src/app/models/contact.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {
  
  @ViewChild('modifyContactModal') modifyContactModal;
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

  contactsTableOptions: any = {};
  
  fakeContacts: ContactList;
  
  dtTrigger: Subject<any> = new Subject();
  hideCard: boolean = true;
  dataLoaded: boolean = false;
  
  readonly addrSliceSize: number = 10;

  modifyContactForm = new FormGroup({
    contactID: new FormControl(''),
    contactName: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.contact_name)]),
    contactPublicAddress: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.xcash_address)]),
  });
  
  constructor(private validatorRegexService: ValidatorsRegexService) { }

  get contactID() {
    return this.modifyContactForm.get('contactID');
  }

  get contactName() {
    return this.modifyContactForm.get('contactName');
  }

  get contactPublicAddress() {
    return this.modifyContactForm.get('contactPublicAddress');
  }

  rerender(): void {
    this.hideCard = true;
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
      setTimeout(() => {
        this.hideCard = false;
      }, 0);
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    setTimeout(() => {
      this.hideCard = false;
    }, 0); // Let the time of data to construct html
  }
  
  ngOnInit() {
    
    this.fakeContacts = new ContactList(FAKE_CONTACTS);
    this.dataLoaded = true;
    // This has been moved in ngAfterViewInit()
    /*
    setTimeout(() => {
      this.dtTrigger.next();
      setTimeout(() => {
      this.hideCard = false;
      }, 0); // Let the time of data to construct html
    }, 0); // Avoid blinking due to table construction and ngFor
    */
    
    
    this.contactsTableOptions = {
      "columns": [
        { "searchable": false },
        null,
        { 
          mRender: function ( data, type, row ) {
            if (type === 'display') {
              return data.slice(0, this.addrSliceSize) + "..." + data.slice(-this.addrSliceSize);
            }
            return data;
          }.bind(this)
        },
        { // Action/Buttons column
          orderable: false,
          width: "150px", // Dirty fix: too small to force it to fit
        }],
      };
      
    }
    
    toggleAddrCopyTooltip(tooltip) {
      if (!tooltip.isOpen()) {
        tooltip.open();
        setTimeout(() => {
          tooltip.close();
        }, 2000);
      }
    }
    
    onModifyContactToggle(contact: Contact) {
      this.contactName.setValue(contact.name);
      this.contactPublicAddress.setValue(contact.address);
      this.contactID.setValue(contact.id);
      this.modifyContactModal.show();
    }

    onSubmitModification() {
      if (!this.modifyContactForm.invalid) {
        this.modifyContactModal.hide();
        this.fakeContacts.modifyContact(this.modifyContactForm.value.contactID, this.modifyContactForm.value.contactName, this.modifyContactForm.value.contactPublicAddress);
        this.rerender();

        setTimeout(() => {
          this.modifyContactForm.reset();
        }, 300); // The time (animation) for the modal to disapear
      }
    }

    onNewContact(newContact: object) {
      this.fakeContacts.add(newContact['contactName'], newContact['contactPublicAddress']);
      this.rerender();
    }
    
  }
  
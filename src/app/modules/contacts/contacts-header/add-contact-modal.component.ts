import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.scss']
})
export class AddContactModalComponent implements OnInit {

  @Output() newContactEvent = new EventEmitter();

  @ViewChild('addContactModal', { static: true }) addContactModal: any;

  addNewContactForm = new FormGroup({
    contactName: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.contact_name)]),
    contactPublicAddress: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.xcash_address)]),
  });

  constructor(private validatorRegexService: ValidatorsRegexService) { }

  ngOnInit() {
  }

  get contactName() {
    return this.addNewContactForm.get('contactName');
  }

  get contactPublicAddress() {
    return this.addNewContactForm.get('contactPublicAddress');
  }

  onSubmit() {
    if (this.addNewContactForm.valid) {
      this.addContactModal.hide();
      this.newContactEvent.emit(this.addNewContactForm.value);
      this.addNewContactForm.reset();
    } else {
      this.contactName.markAsTouched();
      this.contactPublicAddress.markAsTouched();
    }
  }

  show() {
    this.addContactModal.show();
  }

}

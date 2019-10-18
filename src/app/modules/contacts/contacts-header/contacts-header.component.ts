import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';

@Component({
  selector: 'app-contacts-header',
  templateUrl: './contacts-header.component.html',
  styleUrls: ['./contacts-header.component.scss']
})
export class ContactsHeaderComponent implements OnInit {

  @ViewChild('addContactModal') addContactModal: any;

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
    console.log(this.addNewContactForm); // Debug purposes
    if (!this.addNewContactForm.invalid) {
      this.addContactModal.hide();
      console.log(this.addNewContactForm.value); // This is where the action should take place
      this.addNewContactForm.reset();
    }
  }

}

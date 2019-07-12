import { Component, OnInit } from '@angular/core';

export class FormInput {
  email: any;
  password: any;
  confirmPassword: any;
  requiredInput: any;
  url: any;
  phone: any;
  cmbGear: any;
  address: any;
  file: any;
  switcher: any;
}

@Component({
  selector: 'app-frm-validation',
  templateUrl: './frm-validation.component.html',
  styleUrls: ['./frm-validation.component.scss']
})
export class FrmValidationComponent implements OnInit {
  formInput: FormInput;
  form: any;
  public isSubmit: boolean;
  constructor() {
    this.isSubmit = false;
  }

  ngOnInit() {
    this.formInput = {
      email: '',
      password: '',
      confirmPassword: '',
      requiredInput: '',
      url: '',
      phone: '',
      cmbGear: '',
      address: '',
      file: '',
      switcher: ''
    };
  }

  save(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return;
    }
  }

}

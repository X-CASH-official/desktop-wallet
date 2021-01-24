import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() newRegisterEvent = new EventEmitter();

  @ViewChild('RegisterModal', { static: true }) RegisterModal: any;

  RegisterForm = new FormGroup({
    delegateName: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.delegate_name)]),
    ipAddress: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.delegate_name)]),
    publicKey: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.private_key)]),
  });

  constructor(private validatorRegexService: ValidatorsRegexService) { }

  ngOnInit() {
  }

  get delegateName() {
    return this.RegisterForm.get('delegateName');
  }

  get ipAddress() {
    return this.RegisterForm.get('ipAddress');
  }

  get publicKey() {
    return this.RegisterForm.get('publicKey');
  }

  onSubmit() {
    if (this.RegisterForm.valid) {
      this.RegisterModal.hide();
      this.newRegisterEvent.emit(this.RegisterForm.value);
      this.RegisterForm.reset();
    } else {
      this.delegateName.markAsTouched();
      this.ipAddress.markAsTouched();
      this.publicKey.markAsTouched();
    }
  }

  show() {
    this.RegisterModal.show();
  }

}

import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';

export const passwordMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmation = control.get('passwordConfirmation');

  return password.value === confirmation.value ? null : { passwordsDoNotMatch: true };
};

@Component({
  selector: 'app-wallet-name-password-modal',
  templateUrl: './wallet-name-password-modal.component.html',
  styleUrls: ['./wallet-name-password-modal.component.scss']
})
export class WalletNamePasswordModalComponent implements OnInit {

  @Input() modalTitle: string = 'Wallet name and password';
  @Input() createOrImport: string = "create";
  @Output() onSubmit = new EventEmitter();
  @Output() onBackButton = new EventEmitter();

  @ViewChild('nameAndPasswordModal') nameAndPasswordModal: UiModalComponent;

  constructor() { }

  ngOnInit() {
  }

  NameAndPasswordForm = new FormGroup({
    walletName: new FormControl('', [Validators.required]),
    walletPassword: new FormGroup({
      password: new FormControl('', [Validators.required]),
      passwordConfirmation: new FormControl('', [Validators.required])
    }, {
      validators: passwordMatchValidator,
    })
  });
  
  get walletName() {
    return this.NameAndPasswordForm.get('walletName');
  }
  get password() {
    return this.NameAndPasswordForm.get('walletPassword').get('password');
  }
  get passwordConfirmation() {
    return this.NameAndPasswordForm.get('walletPassword').get('passwordConfirmation');
  }
  
  onSubmitNameAndPasswordForm() {
    if (this.NameAndPasswordForm.valid) {
      this.nameAndPasswordModal.hide();
      this.onSubmit.emit(this.NameAndPasswordForm.value);
    } else {
      this.walletName.markAsTouched();
      this.password.markAsTouched();
      this.passwordConfirmation.markAsTouched();
    }
  }

  onBackButtonClick(event) {
    this.onBackButton.emit(event);
  }

  // The form is reset before any show to avoid conflict since it's used by two components
  // There is no guarantee on the content of the form after hiding because another component could use it
  public show() {
    this.NameAndPasswordForm.reset();
    // We could implement a constructor filling the form in case you want persistence between steps
    this.nameAndPasswordModal.show();
  }

  public hide() {
    this.nameAndPasswordModal.hide();
  }

  public resetForm() {
    this.NameAndPasswordForm.reset();
  }

}

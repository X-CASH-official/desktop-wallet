import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';

@Component({
  selector: 'app-import-wallet-modal',
  templateUrl: './import-wallet-modal.component.html',
  styleUrls: ['./import-wallet-modal.component.scss']
})
export class ImportWalletModalComponent implements OnInit {

  constructor(private validatorRegexService: ValidatorsRegexService) { }

  activeTab = 'mnemonicSeedTab';

  @ViewChild('importWalletModal1') importWalletModal1: UiModalComponent;
  @ViewChild('importWalletModal2') importWalletModal2: UiModalComponent;

  importMnemonicSeedForm = new FormGroup({
    mnemonicSeed: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.mnemonic_seed)]),
  });
  get mnemonicSeed() {
    return this.importMnemonicSeedForm.get('mnemonicSeed');
  }

  importPrivateSendKeyForm = new FormGroup({
    privateSendKey: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.private_key)]),
  });
  get privateSendKey() {
    return this.importPrivateSendKeyForm.get('privateSendKey');
  }
  
  ngOnInit() {
  }

  public show() {
    this.importWalletModal1.show();
  }

  onSubmitMnemonicSeed() {
    if (this.importMnemonicSeedForm.valid) {
      console.log(this.mnemonicSeed.value);
      this.importWalletModal1.hide();
      this.importWalletModal2.show();
    } else {
      this.mnemonicSeed.markAsTouched();
    }
  }

  onSubmitPrivateSendKey() {
    if (this.importPrivateSendKeyForm.valid) {
      console.log(this.privateSendKey.value);
      this.importWalletModal1.hide();
      this.importWalletModal2.show();
    } else {
      this.privateSendKey.markAsTouched();
    }
  }



}

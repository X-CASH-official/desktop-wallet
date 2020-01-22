import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';

@Component({
  selector: 'app-import-wallet-modal',
  templateUrl: './import-wallet-modal.component.html',
  styleUrls: ['./import-wallet-modal.component.scss']
})
export class ImportWalletModalComponent implements OnInit {

  constructor(private validatorRegexService: ValidatorsRegexService, private RpcCallsService: RpcCallsService) { }

  Walletdata:any = {"walletName":"walletName","password":"password","seed":"seed"};
  data:string;

  activeTab = 'mnemonicSeedTab';

  @ViewChild('importWalletModal1', { static: true }) importWalletModal1: UiModalComponent;
  @ViewChild('importWalletModal2', { static: true }) importWalletModal2: UiModalComponent;
  @ViewChild('importWalletModalError', { static: true }) importWalletModalError: UiModalComponent;

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
      this.Walletdata.seed = this.mnemonicSeed.value;
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

  async onSubmitNameAndPasswordImportModal(NameAndPasswordValue) {
    this.Walletdata.walletName = NameAndPasswordValue.walletName;
    this.Walletdata.password = NameAndPasswordValue.walletPassword.password;
    try
    {
      this.data = "The wallet is being imported and synced. This might take a long time";
      this.importWalletModalError.show();
      let data:any = await this.RpcCallsService.importWallet(this.Walletdata);
      this.data = "The wallet has been imported successfully";
      this.RpcCallsService.sleep(5000);
      this.importWalletModalError.hide();
      // At this point the wallet is created, and synced
      // save the wallet data to the database
    }
    catch (error)
    {
      this.data = error;
      this.importWalletModalError.show();
    }

  }

  onNameAndPasswordBackButton() {
    this.importWalletModal2.hide();
    this.importWalletModal1.show();
  }




}

import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';
import { DatabaseService } from 'src/app/services/database.service';
import { WalletListService } from 'src/app/services/wallet-list.service';
const fs = (<any>window).require('fs');

@Component({
  selector: 'app-import-wallet-modal',
  templateUrl: './import-wallet-modal.component.html',
  styleUrls: ['./import-wallet-modal.component.scss']
})
export class ImportWalletModalComponent implements OnInit {

  constructor(private validatorRegexService: ValidatorsRegexService, private RpcCallsService: RpcCallsService, private DatabaseService: DatabaseService, private walletListService: WalletListService) { }

  Walletdata:any = {"walletName":"walletName","password":"password","seed":"","viewkey":"","privatekey":"","publicaddress":""};
  data:string;
  progress: number = 0;
  WALLET_DIR = process.platform !== "win32" ? `${process.env.HOME}/xcash-official/` : `${process.env.USERPROFILE}/xcash-official/`;
  WALLET_RPC_LOG = `${this.WALLET_DIR}xcash-wallet-rpc.log`;

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
    viewKey: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.private_key)]),
    privateSendKey: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.private_key)]),
    publicaddress: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.xcash_address)]),
  });
  get privateSendKey() {
    return this.importPrivateSendKeyForm.get('privateSendKey');
  }
  get viewKey() {
    return this.importPrivateSendKeyForm.get('viewKey');
  }
  get publicaddress() {
    return this.importPrivateSendKeyForm.get('publicaddress');
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
      this.Walletdata.privatekey = this.privateSendKey.value;
      this.Walletdata.viewkey = this.viewKey.value;
      this.Walletdata.publicaddress = this.publicaddress.value;
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

      // check if the wallet already exist
      await this.DatabaseService.checkIfWalletExist(this.Walletdata.walletName);

      // get the wallets sync progress
      setTimeout(() => setInterval(() => this.getProgress(),60000), 60000);

      let data:any = await this.RpcCallsService.importWallet(this.Walletdata);
      this.data = "The wallet has been imported successfully";
      this.RpcCallsService.sleep(5000);
      this.importWalletModalError.hide();
      // At this point the wallet is created, and synced

      // save the wallet to the database
      await this.DatabaseService.saveWalletData({"wallet_name":this.Walletdata.walletName,"public_address":data.public_address,"balance":data.balance});
      this.walletListService.addWallet(this.Walletdata.walletName,data.public_address,data.balance);
    }
    catch (error)
    {
      this.data = error;
      this.importWalletModalError.show();
      this.RpcCallsService.sleep(5000);
      this.importWalletModalError.hide();
    }

  }

public async getProgress()
  {
    if (fs.existsSync(`${this.WALLET_RPC_LOG}`))
    {
      let data = fs.readFileSync(`${this.WALLET_RPC_LOG}`, 'utf8');
      let linesInStream = data.split(/[\r\n]+/g);
      let lastLine = linesInStream[linesInStream.length - 2];
      let current_block_height = lastLine.substr(lastLine.indexOf(", height ")+9);
      current_block_height = current_block_height.substr(0,current_block_height.indexOf(","));
      let current_network_block_height = await this.RpcCallsService.getCurrentNetworkBlockHeight();
      this.progress = Math.round((parseInt(current_block_height) / parseInt(current_network_block_height)) * 100);
    }
    return;
  }

  onNameAndPasswordBackButton() {
    this.importWalletModal2.hide();
    this.importWalletModal1.show();
  }




}

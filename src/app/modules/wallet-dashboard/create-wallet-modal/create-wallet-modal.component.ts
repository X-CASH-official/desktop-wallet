import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { FormControl, Validators, FormArray } from '@angular/forms';
import { WalletNamePasswordModalComponent } from '../wallet-name-password-modal/wallet-name-password-modal.component';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';
import { DatabaseService } from 'src/app/services/database.service';
import { WalletListService } from 'src/app/services/wallet-list.service';
const fs = (<any>window).require('fs');

@Component({
  selector: 'app-create-wallet-modal',
  templateUrl: './create-wallet-modal.component.html',
  styleUrls: ['./create-wallet-modal.component.scss']
})
export class CreateWalletModalComponent implements OnInit {
  
  @ViewChild('createWalletModal1', { static: true }) createWalletModal1: WalletNamePasswordModalComponent;
  @ViewChild('createWalletModal2', { static: true }) createWalletModal2: UiModalComponent;
  @ViewChild('createWalletModal3', { static: true }) createWalletModal3: UiModalComponent;
  @ViewChild('createWalletModal4', { static: true }) createWalletModal4: UiModalComponent;
  @ViewChild('createWalletModalError', { static: true }) createWalletModalError: UiModalComponent;

  constructor(private RpcCallsService: RpcCallsService, private DatabaseService: DatabaseService, private walletListService: WalletListService) { }

  // Variables
  exampleSeed: string[] = ["cover", "palace", "renew", "address", "orchard", "derive", "promote", "similar", "artist", "cage", "dial", "forget", "print", "extend", "scissors", "festival", "donor", "peasant", "spawn", "donate", "fever", "olive", "section", "device"];
  publicAddress:string;
  WalletName:string;
  data:string;
  progress: number = 0;
  WALLET_DIR = process.platform !== "win32" ? `${process.env.HOME}/xcash-official/` : `${process.env.USERPROFILE}/xcash-official/`;
  WALLET_RPC_LOG = `${this.WALLET_DIR}xcash-wallet-rpc.log`;
  
  ngOnInit() {
  }
  
  public show() {
    this.createWalletModal1.show();
  }

public async getProgress()
  {
    if (fs.existsSync(`${this.WALLET_RPC_LOG}`))
    {
      let data = fs.readFileSync(`${this.WALLET_RPC_LOG}`, 'utf8');
      let linesInStream = data.split(/[\r\n]+/g);
      let lastLine = linesInStream[linesInStream.length - 2];
      let current_block_height = lastLine.substr(lastLine.indexOf("height: ")+8);
      let current_network_block_height = await this.RpcCallsService.getCurrentNetworkBlockHeight();
      this.progress = Math.round((parseInt(current_block_height) / parseInt(current_network_block_height)) * 100);
    }
    return;
  }
  
  async onSubmitNameAndPasswordModal(NameAndPasswordValues) {
    console.log(NameAndPasswordValues); // This is where the action should take place
    this.WalletName = NameAndPasswordValues.walletName;
    try
    {
      this.data = "The wallet is being created and synced. This might take a long time";
      this.createWalletModalError.show();

      // check if the wallet already exist
      await this.DatabaseService.checkIfWalletExist(this.WalletName);

      // get the wallets sync progress
      setTimeout(() => setInterval(() => this.getProgress(),60000), 60000);

      let data:any = await this.RpcCallsService.createWallet(NameAndPasswordValues);
      // At this point the wallet is created, and synced
      this.createWalletModalError.hide();
      this.publicAddress = data.public_address;

      // save the wallet to the database
      await this.DatabaseService.saveWalletData({"wallet_name":this.WalletName,"public_address":this.publicAddress,"balance":0});
      this.walletListService.addWallet(this.WalletName,this.publicAddress,0);
      
      this.exampleSeed = data.mnemonic_seed.split(" ");
      this.createWalletModal2.show();
      // save the wallet data to the database
    }
    catch (error)
    {
      this.data = error;
      this.RpcCallsService.sleep(5000);
      this.createWalletModalError.hide();
    }
  }
  
  /* Mnemonic seed */
  /* Used to display a "Copied!" badge to copy to clipboard button */

  seedCopiedToClipboard: boolean = false;
  
  copySeedToClipboard() {
    this.seedCopiedToClipboard = true
    setTimeout(() => {
      this.seedCopiedToClipboard = false;
    }, 3000);
  }
  
  /* Mnemonic seed confirmation */
  seedWordsConfirmationForm: FormArray;
  wordsToConfirm: boolean[];
  readonly NUMBER_SEED_WORDS_TO_CONFIRM: number = 12;
  
  seedConfirmationPreparation() {
    this.wordsToConfirm = this.chooseRandomWordsToConfirm(this.exampleSeed, this.NUMBER_SEED_WORDS_TO_CONFIRM);
    this.seedWordsConfirmationForm = this.createSeedForm(this.exampleSeed, this.wordsToConfirm);
  }
  
  onSubmitMnemonicSeedConfirmationForm() {
    if (this.seedWordsConfirmationForm.valid) {
      this.createWalletModal3.hide();
      console.log("refresh wallet list1"); // The action should take place here
      this.createWalletModal4.show();
    } else {
      for (let i = 0; i < this.seedWordsConfirmationForm.length; i++) {
        this.seedWordsConfirmationForm.controls[i].markAsTouched();
      }
    }
  }
  
  private createSeedForm(seed: string[], wordsToConfirm: boolean[]) {
    const seedConfirmationForm = new FormArray([]);
    for (let i = 0; i < seed.length; i++) {
      if (wordsToConfirm[i]) {
        seedConfirmationForm.push(new FormControl('', [Validators.required, Validators.pattern(seed[i])]));
      } else {
        seedConfirmationForm.push(new FormControl(seed[i], [Validators.required]));
      }
    }
    return seedConfirmationForm;
  }
  
  private chooseRandomWordsToConfirm(seed: string[], amountToConfirm: number): boolean[] {
    const numbersToConfirm: number[] = [];
    for(let i = 0; i < amountToConfirm; i++) {
      let randomPick: number = this.getRandomInt(0, seed.length);
      while (numbersToConfirm.includes(randomPick)) {
        randomPick = this.getRandomInt(0, seed.length);
      }
      numbersToConfirm.push(this.getRandomInt(0, seed.length));
    }
    const wordsToConfirm: boolean[] = [];
    for(let i = 0; i < seed.length; i++) {
      if (numbersToConfirm.includes(i)) {
        wordsToConfirm[i] = true;
      } else {
        wordsToConfirm[i] = false;
      }
    }
    return wordsToConfirm;
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  /* Wallet creation recap */
  walletCreationConfirmationLoading: boolean = false;
  
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
  
}

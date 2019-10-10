import { Component, OnInit, ViewChild } from '@angular/core';
import { variables_and_functions_service } from 'src/app/services/variables_and_functions.service';

declare const AmCharts: any;
declare const $: any;

import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wallet-main-menu',
  templateUrl: './wallet-homepage.component.html',
  styleUrls: ['./wallet-homepage.component.scss'],
})
export class WalletHomepageComponent implements OnInit {
  
  // Variables
  total_wallets: number = 0;
  password: string;
  data: string; $
  isWalletHere = false;

  /* Contains which words of the seed should be confirmed */
  wordsToConfirm: boolean[];

  /* The number of words to confirm */
  readonly NUMBER_SEED_WORDS_TO_CONFIRM: number = 12;

  /* Used to display a "Copied!" badge to copy to clipboard button */
  seedCopiedToClipboard: boolean = false;

  @ViewChild('createWalletModal5') walletCreationConfirmationModal: any;
  walletCreationConfirmationLoading: boolean = false;
  
  
  constructor(private variables_and_functions_service: variables_and_functions_service, config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
   }
  
  walletsList: Array<object> = [
    {
      name: "Wallet name",
      address: "XCA...3dR",
      balance: 123423245
    },
    {
      name: "Salary",
      address: "XCA...v2D",
      balance: 18240890
    },
    {
      name: "Fundings",
      address: "XCA...b3s",
      balance: 20640789
    },
    {
      name: "Charities",
      address: "XCA...z4n",
      balance: 1960740
    }
  ];

  exampleSeed: string[] = ["cover", "palace", "renew", "address", "orchard", "derive", "promote", "similar", "artist", "cage", "dial", "forget", "print", "extend", "scissors", "festival", "donor", "peasant", "spawn", "donate", "fever", "olive", "section", "device"];


  ngOnInit() {
    this.reset_data();
  }

  copySeedToClipboard() {
    this.seedCopiedToClipboard = true
    setTimeout(() => {
      this.seedCopiedToClipboard = false;
    }, 3000);
  }

  simulateLoadingThenHide() {
    this.walletCreationConfirmationLoading = true;
    setTimeout(() => {
      this.walletCreationConfirmationModal.hide();
      setTimeout(() => {
        this.walletCreationConfirmationLoading = false;
      }, 300); // The time of the modal hiding animation
    }, 1000); // Arbitrary waiting time
  }

  /**
   * This function alter this.wordsToConfirm
   * @param seed 
   * @param amountToConfirm 
   */
  public confirmSeedRandomWords(seed: string[], amountToConfirm: number) {
    let numbersToConfirm: number[] = [];
    for(let i = 0; i < amountToConfirm; i++) {
      let randomPick: number = this.getRandomInt(0, seed.length);
      while (numbersToConfirm.includes(randomPick)) {
        randomPick = this.getRandomInt(0, seed.length);
      }
      numbersToConfirm.push(this.getRandomInt(0, seed.length));
    }

    let wordsToConfirm: boolean[] = [];
    for(let i = 0; i < seed.length; i++) {
      if (numbersToConfirm.includes(i)) {
        wordsToConfirm[i] = true;
      } else {
        wordsToConfirm[i] = false;
      }
    }

    this.wordsToConfirm = wordsToConfirm;
  }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  reset_data() {
    this.data = "";
  }
  
  verify_data(item: string, data: string) {
    if (item === "create_wallet_1") {
      // verify the wallet name for creating a wallet 
      return this.variables_and_functions_service.text_settings.test(data);
    }
    if (item === "create_wallet_2") {
      // verify the password for creating a wallet  
      this.password = data;
      return this.variables_and_functions_service.text_settings.test(data);
    }
    if (item === "create_wallet_3") {
      // verify the confirm password for creating a wallet      
      return this.variables_and_functions_service.text_settings.test(data) && data === this.password;
    }
    if (item === "import_wallet_1") {
      // verify the mnemonic seed or private key for importing a wallet  
      return this.variables_and_functions_service.mnemonic_seed_or_private_key.test(data);
    }
    if (item === "import_wallet_1_5") {
      // verify the view key for importing a wallet  
      return this.variables_and_functions_service.private_key.test(data);
    }
    if (item === "import_wallet_2") {
      // verify the wallet password for importing a wallet 
      this.password = data;
      return this.variables_and_functions_service.text_settings.test(data);
    }
    if (item === "import_wallet_3") {
      // verify the confirm password for importing a wallet      
      return this.variables_and_functions_service.text_settings.test(data) && data === this.password;
    }
    return false;
  }
  
}

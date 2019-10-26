import { Component, OnInit } from '@angular/core';
import { variables_and_functions_service } from 'src/app/services/variables_and_functions.service';

/*
declare const AmCharts: any;
declare const $: any;
*/

import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wallet-dashboard',
  templateUrl: './wallet-dashboard.component.html',
  styleUrls: ['./wallet-dashboard.component.scss'],
})
export class WalletDashboardComponent implements OnInit {
  
  // Variables
  /*
  total_wallets: number = 0;
  password: string;
  data: string; $
  isWalletHere = false;
  */
  
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


  ngOnInit() {
    //this.reset_data();
  }

  /*
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
  */
  
}

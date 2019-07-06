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

declare var $: any;

import '../../../../assets/charts/flot/jquery.flot.js';
import '../../../../assets/charts/flot/jquery.flot.categories.js';
import '../../../../assets/charts/flot/curvedLines.js';
import '../../../../assets/charts/flot/jquery.flot.tooltip.min.js';

@Component({
  selector: 'app-main_menu',
  templateUrl: './main_menu.component.html',
  styleUrls: ['./main_menu.component.scss']
})
export class main_menuComponent implements OnInit {

  // Variables
  total_wallets:number = 0;
  password:string;
  formInput: object;
  form: any;

  constructor() {}

  ngOnInit()
  {
    this.reset_data();
  } 

  reset_data()
  {
    this.formInput = {
      data1: '',
      data2: ''
    };
  }

  verify_data(item:string, data:string)
  {
    // Constants
    const create_wallet_settings = /^[a-zA-Z0-9]*$/;

    if (item === "create_wallet_1")
    {
      // verify the wallet name for creating a wallet 
      return create_wallet_settings.test(data);
    }
    if (item === "create_wallet_2")
    {
      // verify the password for creating a wallet  
      this.password = data;    
      return create_wallet_settings.test(data);
    }
    if (item === "create_wallet_3")
    {
      // verify the confirm password for creating a wallet      
      return create_wallet_settings.test(data) && data === this.password;
    }
    if (item === "import_wallet_1")
    {
      // verify the mnemonic seed or private key for importing a wallet  
      return data.length === 64 ? /^(?:[0-9a-f]{64})$/.test(data) : /^(?:\b[a-z]+\b[\s]*){25}$/.test(data);
    }
    if (item === "import_wallet_1_5")
    {
      // verify the view key for importing a wallet  
      return /^(?:[0-9a-f]{64})$/.test(data);
    }
    if (item === "import_wallet_2")
    {
      // verify the wallet password for importing a wallet 
      this.password = data; 
      return create_wallet_settings.test(data);
    }
    if (item === "import_wallet_3")
    {
      // verify the confirm password for importing a wallet      
      return create_wallet_settings.test(data) && data === this.password;
    }
    return false;
  }
}
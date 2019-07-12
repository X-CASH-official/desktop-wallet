import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-main_menu',
  templateUrl: './main_menu.component.html',
  styleUrls: ['./main_menu.component.scss']
})
export class main_menuComponent implements OnInit {

  // Variables
  total_wallets:number = 0;
  password:string;
  data:string;

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  ngOnInit()
  {
    this.reset_data();
  } 

  reset_data()
  {
    this.data = "";   
  }

  verify_data(item:string, data:string)
  {
    if (item === "create_wallet_1")
    {
      // verify the wallet name for creating a wallet 
      return this.variables_and_functions_service.text_settings.test(data);
    }
    if (item === "create_wallet_2")
    {
      // verify the password for creating a wallet  
      this.password = data;    
      return this.variables_and_functions_service.text_settings.test(data);
    }
    if (item === "create_wallet_3")
    {
      // verify the confirm password for creating a wallet      
      return this.variables_and_functions_service.text_settings.test(data) && data === this.password;
    }
    if (item === "import_wallet_1")
    {
      // verify the mnemonic seed or private key for importing a wallet  
      return this.variables_and_functions_service.mnemonic_seed_or_private_key.test(data);
    }
    if (item === "import_wallet_1_5")
    {
      // verify the view key for importing a wallet  
      return this.variables_and_functions_service.private_key.test(data);
    }
    if (item === "import_wallet_2")
    {
      // verify the wallet password for importing a wallet 
      this.password = data; 
      return this.variables_and_functions_service.text_settings.test(data);
    }
    if (item === "import_wallet_3")
    {
      // verify the confirm password for importing a wallet      
      return this.variables_and_functions_service.text_settings.test(data) && data === this.password;
    }
    return false;
  }
}
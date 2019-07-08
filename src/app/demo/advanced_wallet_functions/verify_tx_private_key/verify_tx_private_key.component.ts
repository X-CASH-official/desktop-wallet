import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-verify_tx_private_key',
  templateUrl: './verify_tx_private_key.component.html',
  styleUrls: ['./verify_tx_private_key.component.scss']
})
export class verify_tx_private_keyComponent implements OnInit {

  // Variables
  data:any = {
    transaction_hash: "",
    tx_private_key: "",
    public_address: ""
  };
  settings:boolean = false;

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  ngOnInit()
  {
  
  }

  reset_data()
  {
    this.data = {
      transaction_hash: "",
      tx_private_key: "",
      public_address: ""
    };  
  }

  verify_tx_private_key()
  { 
    if (this.variables_and_functions_service.private_key.test(this.data.transaction_hash) && this.variables_and_functions_service.private_key.test(this.data.tx_private_key) && this.variables_and_functions_service.xcash_address.test(this.data.public_address))
    {
      this.settings = true;
      return true;
    }
    this.settings = false;
    return false;
  }
}

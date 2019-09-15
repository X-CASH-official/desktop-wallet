import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-verify_tx_private_key',
  templateUrl: './verify_tx_private_key.component.html',
  styleUrls: ['./verify_tx_private_key.component.scss']
})
export class verify_tx_private_keyComponent implements OnInit {

  // Variables
  error_title:string = "";
  error_message:string = "";
  error:any = {
    error_settings: false
  }  
  data:any = {
    transaction_hash: "",
    tx_private_key: "",
    public_address: ""
  };
  settings:boolean = false;
  amount:string = "";

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

  post_request_error_message(data:string)
  {
    this.error_title = "Verify Transaction Private Key";
    this.error_message = data;
    setTimeout(() => document.getElementById("error").click(), 1000); 
    return;
  }

  async verify_tx_private_key()
  {
    if (this.variables_and_functions_service.private_key.test(this.data.transaction_hash) && this.variables_and_functions_service.private_key.test(this.data.tx_private_key) && this.variables_and_functions_service.xcash_address.test(this.data.public_address))
    {
      // Constants
      const data:string = `{"jsonrpc":"2.0","id":"0","method":"check_tx_key","params":{"txid":"${this.data.transaction_hash}","tx_key":"${this.data.tx_private_key}","address":"${this.data.public_address}"}}`;
      
      // Variables
      let data2:any;

      data2 = await this.variables_and_functions_service.send_post_request(data, this.error);
      if (this.error.error_settings === false)
      {
        this.settings = true;
        this.amount = data2.result.received;
      }
      else
      {
        this.post_request_error_message(data2.error.message);        
      }
    }
  }
}

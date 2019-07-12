import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class sendComponent implements OnInit {

  // Variables
  error_title:string = "";
  error_message:string = "";
  error:any = {
    error_settings: false
  }  
  data:any = {
    public_address: "",
    transaction_hash: [],
    transaction_key: [],
    amount: "",
    fee: "",
    payment_id: "",
    public_transaction_settings: false
  };
  data2:string;
  transaction:string;

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  copyMessage(text: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);    
  }

  ngOnInit()
  {
    
  } 

  reset_data()
  {
    this.data = {
      public_address: "",
      transaction_hash: [],
      transaction_key: [],
      amount: "",
      fee: "",
      payment_id: "",
      password: "",
      public_transaction_settings: false
    };  
  }

  async get_transaction_fee()
  {
    // verify that the data is correct for sending the transaction
    if (this.variables_and_functions_service.xcash_address.test(this.data.public_address) && this.variables_and_functions_service.xcash_amount.test(this.data.amount) && this.variables_and_functions_service.payment_id.test(this.data.payment_id))
    {
       // Variables
       let data:string;
       let data2:any;     
      if (this.data.amount === "FULL_BALNCE")
      {
        if (!this.data.public_transaction_settings)
        {
          data = this.data.payment_id == "" ? `{"jsonrpc":"2.0","id":"0","method":"sweep_all","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"priority":0,"ring_size":21,"get_tx_keys": true, "do_not_relay":true}}` : `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"payment_id":"${this.data.payment_id},"priority":0,"ring_size":21,"get_tx_keys": true, "do_not_relay":true}}`;
        }
        else
        {
          data = this.data.payment_id == "" ? `{"jsonrpc":"2.0","id":"0","method":"sweep_all","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"priority":0,"ring_size":21,"get_tx_keys": true, "do_not_relay":true}}` : `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"tx_privacy_settings":"public", "payment_id":"${this.data.payment_id},"priority":0,"ring_size":21,"get_tx_keys": true, "do_not_relay":true}}`;
        }
      }
      else
      {
        if (!this.data.public_transaction_settings)
        {
          data = this.data.payment_id == "" ? `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"priority":0,"ring_size":21,"get_tx_keys": true, "do_not_relay":true}` : `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"payment_id":"${this.data.payment_id},"priority":0,"ring_size":21,"get_tx_keys": true, "do_not_relay":true}}`;
        }
        else
        {
          data = this.data.payment_id == "" ? `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"priority":0,"ring_size":21,"get_tx_keys": true, "do_not_relay":true}}` : `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"tx_privacy_settings":"public", "payment_id":"${this.data.payment_id},"priority":0,"ring_size":21,"get_tx_keys": true, "do_not_relay":true}}`;
        }
      }

      data2 = await this.variables_and_functions_service.send_post_request(data, this.error);
      if (this.error.error_settings === false)
      {
        this.data.fee = this.variables_and_functions_service.xcash_amount_settings(data2.result.fee_list[0],1);        
        setTimeout(() => document.getElementById("send_transaction_one_data").click(), 1000); 
      }
      else
      {
        this.error_title = "Send";
        this.error_message = data2.error.message;
        setTimeout(() => document.getElementById("error").click(), 1000);        
      } 
    }
  }

  async send()
  {
    // Variables
    let data:string;
    let data2:any; 
    
    data = `{"jsonrpc":"2.0","id":"0","method":"change_wallet_password","params":{"old_password":"${this.data.password}","new_password":"${this.data.password}"}}`;

    // Verify the password
    data2 = await this.variables_and_functions_service.send_post_request(data, this.error);
    if (this.error.error_settings === true)
    {
      this.error_title = "Send";
      this.error_message = data2.error.message;
      this.data.password = "";
      setTimeout(() => document.getElementById("error").click(), 1000); 
      return;
    }

    await this.variables_and_functions_service.sleep(100);

    // verify that the data is correct for sending the transaction
    if (this.variables_and_functions_service.xcash_address.test(this.data.public_address) && this.variables_and_functions_service.xcash_amount.test(this.data.amount) && this.variables_and_functions_service.payment_id.test(this.data.payment_id))
    {
       if (this.data.amount === "FULL_BALNCE")
       {
         if (!this.data.public_transaction_settings)
         {
           data = this.data.payment_id == "" ? `{"jsonrpc":"2.0","id":"0","method":"sweep_all","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"priority":0,"ring_size":21,"get_tx_keys": true}}` : `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"payment_id":"${this.data.payment_id},"priority":0,"ring_size":21,"get_tx_keys": true}}`;
         }
         else
         {
           data = this.data.payment_id == "" ? `{"jsonrpc":"2.0","id":"0","method":"sweep_all","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"priority":0,"ring_size":21,"get_tx_keys": true}}` : `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"tx_privacy_settings":"public", "payment_id":"${this.data.payment_id},"priority":0,"ring_size":21,"get_tx_keys": true}}`;
         }
       }
       else
       {
         if (!this.data.public_transaction_settings)
         {
           data = this.data.payment_id == "" ? `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"priority":0,"ring_size":21,"get_tx_keys": true}}` : `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"payment_id":"${this.data.payment_id},"priority":0,"ring_size":21,"get_tx_keys": true}}`;
         }
         else
         {
           data = this.data.payment_id == "" ? `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"priority":0,"ring_size":21,"get_tx_keys": true}}` : `{"jsonrpc":"2.0","id":"0","method":"transfer_split","params":{"destinations":[{"amount":${this.variables_and_functions_service.xcash_amount_settings(this.data.amount,0)},"address":"${this.data.public_address}"}],"tx_privacy_settings":"public", "payment_id":"${this.data.payment_id},"priority":0,"ring_size":21,"get_tx_keys": true}}`;
         }
       }

      data2 = await this.variables_and_functions_service.send_post_request(data, this.error);
      if (this.error.error_settings === false)
      {
        this.data.transaction_hash = data2.result.tx_hash_list;
        this.data.transaction_key = data2.result.tx_key_list;
        setTimeout(() => document.getElementById("send_transaction_two_data").click(), 1000); 
      }
      else
      {
        this.error_title = "Send";
        this.error_message = data2.error.message;
        setTimeout(() => document.getElementById("error").click(), 1000);        
      } 
    }
  }

  verify_data(item:string, data:string)
  {    
    if (item === "send_transaction_2")
    {
      // verify the password for sending the transaction
      return this.variables_and_functions_service.text_settings.test(data);
    }
    return false;
  }
}

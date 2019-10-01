import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-get_tx_private_key',
  templateUrl: './get_tx_private_key.component.html',
  styleUrls: ['./get_tx_private_key.component.scss']
})
export class get_tx_private_keyComponent implements OnInit {

  // Variables
  error_title:string = "";
  error_message:string = "";
  error:any = {
    error_settings: false
  } 
  data:string;
  tx_private_key_settings:boolean = true;
  settings:string = "";
  tx_private_key:string = "";

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
    this.timer_data("copy_transaction_private_key");
  }

  ngOnInit()
  {
  
  }

  timer_data(data:string)
  {
    this.settings = data;
    setTimeout(() => this.settings = "", 5000);
  }

  post_request_error_message(data:string)
  {
    this.error_title = "Get Transaction Private Key";
    this.error_message = data;
    setTimeout(() => document.getElementById("error").click(), 1000); 
    return;
  }

  async get_tx_private_key()
  {
    if (this.variables_and_functions_service.private_key.test(this.data))
    {     
      // Constants
      const data:string = `{"jsonrpc":"2.0","id":"0","method":"get_tx_key","params":{"txid":"${this.data}"}}`;
      
      // Variables
      let data2:any;

      data2 = await this.variables_and_functions_service.send_post_request(data, this.error);
      if (this.error.error_settings === false)
      {
        this.tx_private_key = data2.result.tx_key; 
      }
      else
      {
        this.post_request_error_message(data2.error.message);       
      }
    }
  }
}

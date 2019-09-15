import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-view_private_keys',
  templateUrl: './view_private_keys.component.html',
  styleUrls: ['./view_private_keys.component.scss']
})
export class view_private_keysComponent implements OnInit {

  // Variables
  error_title:string = "";
  error_message:string = "";
  error:any = {
    error_settings: false
  }  
  password_settings:boolean = false;
  data:string;
  data2:string;
  private_key_settings:boolean = false;
  view_key_settings:boolean = false;
  mnemonic_seed:string = "";
  view_key:string = "";

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

  timer_data(data:string)
  {
    if (data === "mnemonic_seed")
    {
      this.private_key_settings = true;
      setTimeout(() => this.private_key_settings = false, 5000);
    }
    else if (data === "view key")
    {
      this.view_key_settings = true;
      setTimeout(() => this.view_key_settings = false, 5000);
    }
  }

  post_request_error_message(data:string)
  {
    this.error_title = "View Private Keys";
    this.error_message = data;
    setTimeout(() => document.getElementById("error").click(), 1000); 
    return;
  }

  async view_private_keys()
  {
    // Variables
    let data:string;
    let data2:any; 
    
    data = `{"jsonrpc":"2.0","id":"0","method":"change_wallet_password","params":{"old_password":"${this.data}","new_password":"${this.data}"}}`;
 
    // Verify the password
    data2 = await this.variables_and_functions_service.send_post_request(data, this.error);
    if (this.error.error_settings === true)
    {      
      this.data = "";
      this.post_request_error_message(data2.error.message);
      return;
    }
 
    await this.variables_and_functions_service.sleep(100);

    data2 = await this.variables_and_functions_service.send_post_request(this.variables_and_functions_service.get_mnemonic_seed, this.error);
    if (this.error.error_settings === false)
    {
      this.mnemonic_seed = data2.result.key;
      await this.variables_and_functions_service.sleep(100);
      data2 = await this.variables_and_functions_service.send_post_request(this.variables_and_functions_service.get_view_key, this.error);
      if (this.error.error_settings === false)
      {
        this.view_key = data2.result.key; 
        this.password_settings = true;
      }
      else
      {
        this.post_request_error_message(data2.error.message);
      }  
    }
    else
    {
      this.post_request_error_message(data2.error.message);      
    } 
  }

  ngOnInit()
  {
    
  }
}

import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-sign_data',
  templateUrl: './sign_data.component.html',
  styleUrls: ['./sign_data.component.scss']
})
export class sign_dataComponent implements OnInit {

  // Variables
  error_title:string = "";
  error_message:string = "";
  error:any = {
    error_settings: false
  }  
  data:string;
  settings:boolean = false;
  signature_settings:boolean = false;
  signature:string;

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  ngOnInit()
  {
  
  }

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

  timer_data()
  {
    this.signature_settings = true;
    setTimeout(() => this.signature_settings = false, 5000);
  }

  reset_data()
  {
    this.data = "";
  }

  post_request_error_message(data:string)
  {
    this.error_title = "Sign Data";
    this.error_message = data;
    setTimeout(() => document.getElementById("error").click(), 1000); 
    return;
  }

  async sign_data()
  {
    // Constants
    const data:string = `{"jsonrpc":"2.0","id":"0","method":"sign","params":{"data":"${this.data}"}}`;
    
    // Variables
    let data2:any;

    data2 = await this.variables_and_functions_service.send_post_request(data, this.error);
    if (this.error.error_settings === false)
    {
      this.settings = true;
      this.signature = data2.result.signature;
    }
    else
    {
      this.post_request_error_message(data2.error.message);    
    }   
  }
}

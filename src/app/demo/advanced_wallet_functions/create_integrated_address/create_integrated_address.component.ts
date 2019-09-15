import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-create_integrated_address',
  templateUrl: './create_integrated_address.component.html',
  styleUrls: ['./create_integrated_address.component.scss']
})
export class create_integrated_addressComponent implements OnInit {

  // Variables
  error_title:string = "";
  error_message:string = "";
  error:any = {
    error_settings: false
  }  
  data:string;
  settings:boolean = false;
  integrated_address_settings:boolean = false;
  integrated_address:string;

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
    this.integrated_address_settings = true;
    setTimeout(() => this.integrated_address_settings = false, 5000);
  }

  reset_data()
  {
    this.data = "";
  }

  post_request_error_message(data:string)
  {
    this.error_title = "Create Integrated Address";
    this.error_message = data;
    setTimeout(() => document.getElementById("error").click(), 1000); 
    return;
  }

  async create_integrated_address()
  { 
    if (this.variables_and_functions_service.encrypted_payment_id.test(this.data) || this.data == undefined)   
    {
      // Constants
      const data:string = this.data == "" ? '{"jsonrpc":"2.0","id":"0","method":"make_integrated_address"}' : `{"jsonrpc":"2.0","id":"0","method":"make_integrated_address","params":{"payment_id":"${this.data}"}}`;
      
      // Variables
      let data2:any;

      data2 = await this.variables_and_functions_service.send_post_request(data, this.error);
      if (this.error.error_settings === false)
      {
        this.settings = true;
        this.integrated_address = data2.result.integrated_address;
      }
      else
      {
        this.post_request_error_message(data2.error.message);    
      }       
      return true;
    }
    return false;
  }
}

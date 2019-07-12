import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-create_sub_address',
  templateUrl: './create_sub_address.component.html',
  styleUrls: ['./create_sub_address.component.scss']
})
export class create_sub_addressComponent implements OnInit {

  // Variables
  error_title:string = "";
  error_message:string = "";
  error:any = {
    error_settings: false
  }  
  data:string = "";
  settings:boolean = false;
  sub_addresses:any;

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  ngOnInit()
  {
    this.get_sub_addressses();
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

  reset_data()
  {
    this.data = "";
  }

  timer_data()
  {
    this.settings = true;
    setTimeout(() => this.settings = false, 5000);
  }

  async get_sub_addressses()
  {
    // Variables
    let data:any;

    data = await this.variables_and_functions_service.send_post_request(this.variables_and_functions_service.get_sub_addresses, this.error);
    if (this.error.error_settings === false)
    {
      // remove any empty values and then sort the array in ascending order by the address_index
      this.sub_addresses = (data.result.addresses.filter(data => data)).sort((a,b)=>a.address_index-b.address_index);
    }
    else
    {
      this.error_title = "Get Sub Addresses";
      this.error_message = data.error.message;
      setTimeout(() => document.getElementById("error").click(), 1000);        
    }  
  }

  async create_sub_address(data:string)
  {     
    if (this.variables_and_functions_service.text_settings.test(data))
    {
      // Constants
      const data2:string = `{"jsonrpc":"2.0","id":"0","method":"create_address","params":{"account_index":0,"label":"${data}"}}`;
      
      // Variables
      let data3:any;

      data3 = await this.variables_and_functions_service.send_post_request(data2, this.error);
      if (this.error.error_settings === false)
      {
        await this.variables_and_functions_service.sleep(100);
        this.get_sub_addressses();
      }
      else
      {
        this.error_title = "Create Sub Address";
        this.error_message = data3.error.message;
        setTimeout(() => document.getElementById("error").click(), 1000);        
      }       
      return true;
    }
    return false;
  }
}
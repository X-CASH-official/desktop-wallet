import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-view_public_address',
  templateUrl: './view_public_address.component.html',
  styleUrls: ['./view_public_address.component.scss']
})
export class view_public_addressComponent implements OnInit {

  // Variables
  error_title:string = "";
  error_message:string = "";
  error:any = {
    error_settings: false
  }  
  data:string;
  data2:string;
  public_address_settings:boolean = false;
  public_address:string = "";

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
    this.public_address_settings = true;
    setTimeout(() => this.public_address_settings = false, 5000);
  }

  async ngOnInit()
  {
    // Variables
    let data2:any;

    data2 = await this.variables_and_functions_service.send_post_request(this.variables_and_functions_service.get_public_address, this.error);
    if (this.error.error_settings === false)
    {
      this.public_address = data2.result.address; 
    }
    else
    {
      this.error_title = "View Public Address";
      this.error_message = data2.error.message;
      setTimeout(() => document.getElementById("error").click(), 1000);        
    } 
  }
}

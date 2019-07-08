import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-create_integrated_address',
  templateUrl: './create_integrated_address.component.html',
  styleUrls: ['./create_integrated_address.component.scss']
})
export class create_integrated_addressComponent implements OnInit {

  // Variables
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

  create_integrated_address()
  {  
    if (this.variables_and_functions_service.encrypted_payment_id.test(this.data))   
    {
      this.settings = true;
      return true;
    }
    this.settings = false;
    return false;
  }
}

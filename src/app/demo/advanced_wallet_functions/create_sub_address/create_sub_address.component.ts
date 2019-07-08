import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-create_sub_address',
  templateUrl: './create_sub_address.component.html',
  styleUrls: ['./create_sub_address.component.scss']
})
export class create_sub_addressComponent implements OnInit {

  // Variables
  data:string = "";
  settings:boolean = false;

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

  reset_data()
  {
    this.data = "";
  }

  timer_data()
  {
    this.settings = true;
    setTimeout(() => this.settings = false, 5000);
  }

  create_sub_address(data:string)
  {     
    if (this.variables_and_functions_service.text_settings.test(data))
    {
      return true;
    }
    return false;
  }
}

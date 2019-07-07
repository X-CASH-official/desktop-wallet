import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-view_private_keys',
  templateUrl: './view_private_keys.component.html',
  styleUrls: ['./view_private_keys.component.scss']
})
export class view_private_keysComponent implements OnInit {

  // Variables
  password_settings:boolean = false;
  data:string;
  data2:string;
  private_key_settings:boolean = false;
  view_key_settings:boolean = false;
  private_key:string = "";
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
    this.data2 = data;
    if (data.includes("private key"))
    {
      this.private_key_settings = true;
      setTimeout(() => this.private_key_settings = false, 5000);
    }
    else if (data.includes("view key"))
    {
      this.view_key_settings = true;
      setTimeout(() => this.view_key_settings = false, 5000);
    }
  }

  confirm_password()
  {
    this.password_settings = true;
  }

  ngOnInit()
  {
    
  }
}

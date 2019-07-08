import { Component, OnInit } from '@angular/core';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-get_tx_private_key',
  templateUrl: './get_tx_private_key.component.html',
  styleUrls: ['./get_tx_private_key.component.scss']
})
export class get_tx_private_keyComponent implements OnInit {

  // Variables
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

  get_tx_private_key()
  {
    return this.variables_and_functions_service.private_key.test(this.data);
  }
}

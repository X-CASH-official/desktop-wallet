import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign_data',
  templateUrl: './sign_data.component.html',
  styleUrls: ['./sign_data.component.scss']
})
export class sign_dataComponent implements OnInit {

  // Variables
  data:string;
  settings:boolean = false;
  signature_settings:boolean = false;
  signature:string;

  constructor() { }

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

  verify_reserve_proof()
  {     
    this.settings = true;
    return true;
  }
}

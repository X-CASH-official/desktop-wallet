import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view_public_address',
  templateUrl: './view_public_address.component.html',
  styleUrls: ['./view_public_address.component.scss']
})
export class view_public_addressComponent implements OnInit {

  // Variables
  data:string;
  data2:string;
  public_address_settings:boolean = false;
  public_address:string = "";

  constructor() { }

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
    this.public_address_settings = true;
    setTimeout(() => this.public_address_settings = false, 5000);
  }

  ngOnInit()
  {
  
  }
}

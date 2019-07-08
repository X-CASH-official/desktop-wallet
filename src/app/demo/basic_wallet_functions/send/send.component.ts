import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class sendComponent implements OnInit {

  // Variables
  data:any = {
    public_address: "",
    amount: "",
    payment_id: "",
    public_transaction_settings: false
  };
  data2:string;
  transaction:string;

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

  ngOnInit()
  {
    
  } 

  reset_data()
  {
    this.data = {
      public_address: "",
      amount: "",
      payment_id: "",
      public_transaction_settings: false
    };  
  }

  send()
  {
    // verify that the data is correct for sending the transaction
    return this.variables_and_functions_service.xcash_address.test(this.data.public_address) && this.variables_and_functions_service.xcash_amount.test(this.data.amount) && this.variables_and_functions_service.payment_id.test(this.data.payment_id);
  }

  verify_data(item:string, data:string)
  {    
    if (item === "send_transaction_2")
    {
      // verify the password for sending the transaction
      return this.variables_and_functions_service.text_settings.test(data);
    }
    return false;
  }
}

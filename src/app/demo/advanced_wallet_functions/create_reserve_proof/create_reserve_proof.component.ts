import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-create_reserve_proof',
  templateUrl: './create_reserve_proof.component.html',
  styleUrls: ['./create_reserve_proof.component.scss']
})
export class create_reserve_proofComponent implements OnInit {

// Variables
error_title:string = "";
error_message:string = "";
error:any = {
  error_settings: false
}  
data:any = {
  amount: "",
  message: ""
};
settings:boolean = false;
reserve_proof_settings:boolean = false;
reserve_proof:string = "";

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
    this.reserve_proof_settings = true;
    setTimeout(() => this.reserve_proof_settings = false, 5000);
  }

  reset_data()
  {
    this.data = {
      amount: "",
      message: ""
    };  
  }

  post_request_error_message(data:string)
  {
    this.error_title = "Create Reserve Proof";
    this.error_message = data;
    setTimeout(() => document.getElementById("error").click(), 1000); 
    return;
  }

  async create_reserve_proof()
  {    
    // Variables
    let data:string;
    let data2:any;

    if (this.data.amount === "ALL")
    {
      data = this.data.message == "" ? `{"jsonrpc":"2.0","id":"0","method":"get_reserve_proof","params":{"all":true}}` : `{"jsonrpc":"2.0","id":"0","method":"get_reserve_proof","params":{"all":true, "message":${this.data.message}}}`;
    }
    else
    {
      data = this.data.message == "" ? `{"jsonrpc":"2.0","id":"0","method":"get_reserve_proof","params":{"all":false, "amount":${this.data.amount}}}` : `{"jsonrpc":"2.0","id":"0","method":"get_reserve_proof","params":{"all":false, "amount":${this.data.amount}, "message":${this.data.message}}}`;
    }

    data2 = await this.variables_and_functions_service.send_post_request(data, this.error);
    if (this.error.error_settings === false)
    {
      this.settings = true;
      this.reserve_proof = data2.result.signature;
    }
    else
    {
      this.post_request_error_message(data2.error.message);    
    }   
  }
}

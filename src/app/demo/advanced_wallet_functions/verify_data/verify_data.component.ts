import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-verify_data',
  templateUrl: './verify_data.component.html',
  styleUrls: ['./verify_data.component.scss']
})
export class verify_dataComponent implements OnInit {

  // Variables
  error_title:string = "";
  error_message:string = "";
  error:any = {
    error_settings: false
  }  
  data:any = {
    signature: "",
    public_address: "",
    message: ""
  };
  signature_settings:boolean = false;
  settings:string = "";

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  ngOnInit()
  {
  
  }

  reset_data()
  {
    this.data = {
      signature: "",
      public_address: "",
      message: ""
    };  
  }

  async verify_signature()
  {
    if (this.variables_and_functions_service.signature.test(this.data.signature) && this.variables_and_functions_service.xcash_address.test(this.data.public_address))
    {
      // Constants
      const data:string = this.data.message == "" ? `{"jsonrpc":"2.0","id":"0","method":"verify","params":{"address":"${this.data.public_address}","signature":"${this.data.signature}"}}` : `{"jsonrpc":"2.0","id":"0","method":"verify","params":{"address":"${this.data.public_address}","signature":"${this.data.signature}","data":"${this.data.message}"}}`;
      
      // Variables
      let data2:any;

      data2 = await this.variables_and_functions_service.send_post_request(data, this.error);
      if (this.error.error_settings === false)
      {
        this.signature_settings = true;
        this.settings = data2.result.good ? "The signature is valid" : "The signature is invalid";
      }
      else
      {
        this.error_title = "Verify data";
        this.error_message = data2.error.message;
        setTimeout(() => document.getElementById("error").click(), 1000);        
      }
    }
  }
}

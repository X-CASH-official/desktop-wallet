import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-verify_reserve_proof',
  templateUrl: './verify_reserve_proof.component.html',
  styleUrls: ['./verify_reserve_proof.component.scss']
})
export class verify_reserve_proofComponent implements OnInit {

  // Variables
  error_title:string = "";
  error_message:string = "";
  error:any = {
    error_settings: false
  }  
  data:any = {
    reserve_proof: "",
    public_address: "",
    message: ""
  };
  reserve_proof_settings:boolean = false;
  settings:string = "";

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  ngOnInit()
  {
  
  }

  reset_data()
  {
    this.data = {
      reserve_proof: "",
      public_address: "",
      message: ""
    };  
  }

  async verify_reserve_proof()
  {
    if (this.variables_and_functions_service.reserve_proof.test(this.data.reserve_proof) && this.variables_and_functions_service.xcash_address.test(this.data.public_address))
    {
      // Constants
      const data:string = this.data.message == "" ? `{"jsonrpc":"2.0","id":"0","method":"check_reserve_proof","params":{"address":"${this.data.public_address}","signature":"${this.data.reserve_proof}"}}` : `{"jsonrpc":"2.0","id":"0","method":"check_reserve_proof","params":{"address":"${this.data.public_address}","signature":"${this.data.reserve_proof}","message":"${this.data.message}"}}`;
      
      // Variables
      let data2:any;

      data2 = await this.variables_and_functions_service.send_post_request(data, this.error);
      if (this.error.error_settings === false)
      {
        this.reserve_proof_settings = true;
        this.settings = data2.result.good && data2.result.spent === 0 ? "The reserve proof if valid and no funds have been spent since creating the reserve proof" : data2.result.good && data2.result.spent !== 0 ? "The reserve proof is valid, but funds have been spent since creating the reserve proof" : "The reserve proof is invalid";
      }
      else
      {
        this.error_title = "Verify Reserve Proof Key";
        this.error_message = data2.error.message;
        setTimeout(() => document.getElementById("error").click(), 1000);        
      }
    }
  }
}

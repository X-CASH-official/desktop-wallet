import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-verify_data',
  templateUrl: './verify_data.component.html',
  styleUrls: ['./verify_data.component.scss']
})
export class verify_dataComponent implements OnInit {

  // Variables
  data:any = {
    signature: "",
    public_address: "",
    message: ""
  };
  signature_settings:boolean = false;
  settings:boolean = false;

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

  verify_signature()
  { 
    this.signature_settings = true;
    if (this.variables_and_functions_service.signature.test(this.data.signature) && this.variables_and_functions_service.xcash_address.test(this.data.public_address))
    {
      this.settings = true;
      return true;
    }
    this.settings = false;
    return false;
  }
}

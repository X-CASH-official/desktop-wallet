import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-verify_reserve_proof',
  templateUrl: './verify_reserve_proof.component.html',
  styleUrls: ['./verify_reserve_proof.component.scss']
})
export class verify_reserve_proofComponent implements OnInit {

  // Variables
  data:any = {
    reserve_proof: "",
    public_address: "",
    message: ""
  };
  reserve_proof_settings:boolean = false;
  settings:boolean = false;

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

  verify_reserve_proof()
  { 
    this.reserve_proof_settings = true;
    if (this.variables_and_functions_service.reserve_proof.test(this.data.reserve_proof) && this.variables_and_functions_service.xcash_address.test(this.data.public_address))
    {
      this.settings = true;
      return true;
    }
    this.settings = false;
    return false;
  }
}

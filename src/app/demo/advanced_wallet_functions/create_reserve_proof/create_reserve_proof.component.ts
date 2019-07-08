import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-create_reserve_proof',
  templateUrl: './create_reserve_proof.component.html',
  styleUrls: ['./create_reserve_proof.component.scss']
})
export class create_reserve_proofComponent implements OnInit {

// Variables
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

  verify_reserve_proof()
  { 
    if (this.variables_and_functions_service.xcash_reserve_proof_amount.test(this.data.amount))
    {
      this.settings = true;
      return true;
    }
    this.settings = false;
    return false;
  }
}

import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-change_password',
  templateUrl: './change_password.component.html',
  styleUrls: ['./change_password.component.scss']
})
export class change_passwordComponent implements OnInit {

  // Variables
  data:any = {
    current_password: "",
    new_password: "",
    confirm_password: ""
  };
  settings:boolean = false;

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  ngOnInit()
  {
    this.reset_data();
  } 

  reset_data()
  {
    this.data = {
      current_password: "",
      new_password: "",
      confirm_password: ""
    };  
  }

  timer_data()
  {
    this.settings = true;
    setTimeout(() => this.settings = false, 5000);
  }

  change_password()
  {
    if (this.variables_and_functions_service.text_settings.test(this.data.current_password) && this.variables_and_functions_service.text_settings.test(this.data.new_password) && this.variables_and_functions_service.text_settings.test(this.data.confirm_password))
    {
      this.timer_data();
      return true;
    }
    return false;
  }
}

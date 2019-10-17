import { Component, OnInit } from '@angular/core';
import { variables_and_functions_service } from 'src/app/services/variables_and_functions.service';

@Component({
  selector: 'app-change_password',
  templateUrl: './change_password.component.html',
  styleUrls: ['./change_password.component.scss']
})
export class change_passwordComponent implements OnInit {

  // Variables
  error_title:string = "";
  error_message:string = "";
  error:any = {
    error_settings: false
  }  
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

  post_request_error_message(data:string)
  {
    this.error_title = "Change Password";
    this.error_message = data;
    setTimeout(() => document.getElementById("error").click(), 1000); 
    return;
  }

  async change_password()
  {
    if (this.variables_and_functions_service.text_settings.test(this.data.current_password) && this.variables_and_functions_service.text_settings.test(this.data.new_password) && this.variables_and_functions_service.text_settings.test(this.data.confirm_password) && this.data.new_password === this.data.confirm_password)
    {
      // Constants
      const data:string = `{"jsonrpc":"2.0","id":"0","method":"change_wallet_password","params":{"old_password":"${this.data.current_password}","new_password":"${this.data.new_password}"}}`;
      
      // Variables
      let data2:any;

      data2 = await this.variables_and_functions_service.send_post_request(data, this.error);
      if (this.error.error_settings === false)
      {
        this.timer_data(); 
      }
      else
      {
        this.post_request_error_message(data2.error.message);       
      }
    }
  }
}

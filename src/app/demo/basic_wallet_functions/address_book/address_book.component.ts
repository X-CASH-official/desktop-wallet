import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-address_book',
  templateUrl: './address_book.component.html',
  styleUrls: ['./address_book.component.scss']
})
export class address_bookComponent implements OnInit {

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  // Variables
  data:string;
  settings:boolean = false;

  ngOnInit()
  {
    this.reset_data();
  } 

  reset_data()
  {
    this.data = "";
  }

  timer_data()
  {
    this.settings = true
    setTimeout(() => this.settings = false, 5000);
  }

  verify_data(item:string, data:string)
  {
    if (item === "address_book_create_1")
    {
      // verify the wallet name for adding an address book entry
      return data.length <= this.variables_and_functions_service.text_settings_length;
    }
    if (item === "address_book_create_2")
    {
      // verify the password for adding an address book entry
      return this.variables_and_functions_service.xcash_address.test(data);
    }
    if (item === "address_book_create_3")
    {
      // verify the confirm password for adding an address book entry    
      return this.variables_and_functions_service.payment_id.test(data);
    }
    return false;
  }
}

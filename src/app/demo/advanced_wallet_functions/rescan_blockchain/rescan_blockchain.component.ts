import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';

@Component({
  selector: 'app-rescan_blockchain',
  templateUrl: './rescan_blockchain.component.html',
  styleUrls: ['./rescan_blockchain.component.scss']
})
export class rescan_blockchainComponent implements OnInit {

   // Variables
   error_title:string = "";
   error_message:string = "";
   error:any = {
     error_settings: false
   }  

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  ngOnInit()
  {
  
  }

  async rescan_blockchain()
  {
    // Variables
    let data2:any;

    data2 = await this.variables_and_functions_service.send_post_request(this.variables_and_functions_service.rescan_blockchain, this.error);
    if (this.error.error_settings === false)
    {
      setTimeout(() => document.getElementById("xcashd_load").click(), 1000); 
    }
    else
    {
      this.error_title = "Rescan Blockchain";
      this.error_message = data2.error.message;
      setTimeout(() => document.getElementById("error").click(), 1000);        
    }       
  }
}

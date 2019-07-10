import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class dashboardComponent implements OnInit {
  
  // Variables
  error_title:string = "";
  error_message:string = "";
  error:any = {
    error_settings: false
  }  
  total_xcash:number = 0;
  total_unlocked_balance:number = 0;
  transaction_history:any = {
    address: "",
    amount: 0, 
    confirmations: 0,
    fee: 0,
    height: 0,
    payment_id: "",
    timestamp: 0,
    transaction_hash: "",
    type: "",
    unlock_time: 0
  };

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  async ngOnInit()
  {
    // Variables
    let data:any;
  
    // get the balance
    data = await this.variables_and_functions_service.send_post_request(this.variables_and_functions_service.get_balance, this.error);
    if (this.error.error_settings === false)
    {
      this.total_xcash = data.result.balance;
      this.total_unlocked_balance = data.result.unlocked_balance;
    }
    else
    {
      this.error_title = "Get Balance";
      this.error_message = data.error.message;
      setTimeout(() => document.getElementById("error").click(), 1000);
    } 

    // get the transaction history
    await this.variables_and_functions_service.sleep(100);
    if (this.variables_and_functions_service.transaction_history == undefined)
    {
      // Get all of the transactions
      data = await this.variables_and_functions_service.send_post_request(this.variables_and_functions_service.get_all_transactions, this.error);
      if (this.error.error_settings === false)
      {
        // combine the in, out and pending arrays and then remove any empty values and then sort the array in descending order by the timestamps
        this.variables_and_functions_service.transaction_history = ((data.result.in.concat(data.result.out).concat(data.result.pending)).filter(data => data)).sort((a,b)=>b.timestamp-a.timestamp);  
        
        // adjust the numbers to display them
        var count;
        for (count = 0; count < this.variables_and_functions_service.transaction_history.length; count++)
        {
          this.variables_and_functions_service.transaction_history[count].amount = this.variables_and_functions_service.xcash_amount_settings(this.variables_and_functions_service.transaction_history[count].amount,1);
          this.variables_and_functions_service.transaction_history[count].fee = this.variables_and_functions_service.xcash_amount_settings(this.variables_and_functions_service.transaction_history[count].fee,1);
        }
        
      }
      else
      {
        this.error_title = "Get Transactions";
        this.error_message = data.error.message;
        setTimeout(() => document.getElementById("error").click(), 1000);
      } 
    }
  }

  get_transaction_details(count:number)
  {
    this.transaction_history.address = this.variables_and_functions_service.transaction_history[count].address;
    this.transaction_history.amount = this.variables_and_functions_service.transaction_history[count].amount;
    this.transaction_history.confirmations = this.variables_and_functions_service.transaction_history[count].confirmations;
    this.transaction_history.fee = this.variables_and_functions_service.transaction_history[count].fee;
    this.transaction_history.height = this.variables_and_functions_service.transaction_history[count].height;
    this.transaction_history.payment_id = this.variables_and_functions_service.transaction_history[count].payment_id;
    this.transaction_history.timestamp = this.variables_and_functions_service.transaction_history[count].timestamp;
    this.transaction_history.transaction_hash = this.variables_and_functions_service.transaction_history[count].txid;
    this.transaction_history.type = this.variables_and_functions_service.transaction_history[count].type;
    this.transaction_history.unlock_time = this.variables_and_functions_service.transaction_history[count].unlock_time;
  }
}
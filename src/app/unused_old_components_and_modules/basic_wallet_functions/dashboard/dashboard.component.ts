import { Component, OnInit } from '@angular/core';
import { variables_and_functions_service } from '../../../services/variables_and_functions.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class dashboardComponent implements OnInit {

  // Variables
  error_title: string = "";
  error_message: string = "";
  error: any = {
    error_settings: false
  }
  total_xcash: number = 0;
  total_unlocked_balance: number = 0;
  transaction_history: any = {
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
  data: string;
  data2: string;
  public_address_settings: boolean = false;
  public_address: string = "";

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  copyMessage(text: string) {
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

  timer_data(data: string) {
    this.public_address_settings = true;
    setTimeout(() => this.public_address_settings = false, 5000);
  }

  post_request_error_message(data: string) {
    this.error_title = "View Public Address";
    this.error_message = data;
    setTimeout(() => document.getElementById("error").click(), 1000);
    return;
  }

  
  async ngOnInit() {
    this.get_balance();
    await this.variables_and_functions_service.sleep(100);
    this.get_transactions();
    let data2: any;

    data2 = await this.variables_and_functions_service.send_post_request(this.variables_and_functions_service.get_public_address, this.error);
    if (this.error.error_settings === false) {
      this.public_address = data2.result.address;
    }
    else {
      this.post_request_error_message(data2.error.message);
    }

    // set the timer to get the balance and the transactions every block interval
    setInterval(async () => {
      this.get_balance();
      await this.variables_and_functions_service.sleep(100);
      this.get_transactions();
    }, this.variables_and_functions_service.block_time * 60 * 1000);
  }


  async get_balance() {
    // Variables
    let data: any;

    // get the balance
    data = await this.variables_and_functions_service.send_post_request(this.variables_and_functions_service.get_balance, this.error);
    if (this.error.error_settings === false) {
      this.total_xcash = this.variables_and_functions_service.xcash_amount_settings(data.result.balance, 1);
      this.total_unlocked_balance = this.variables_and_functions_service.xcash_amount_settings(data.result.unlocked_balance, 1);
    }
    else {
      this.error_title = "Get Balance";
      this.error_message = data.error.message;
      setTimeout(() => document.getElementById("error").click(), 1000);
    }
  }

  async get_transactions() {
    // Variables
    let data: any;

    // Get all of the transactions
    data = await this.variables_and_functions_service.send_post_request(this.variables_and_functions_service.get_all_transactions, this.error);
    if (this.error.error_settings === false) {
      // combine the in, out and pending arrays and then remove any empty values and then sort the array in descending order by the timestamps
      this.variables_and_functions_service.transaction_history = ((data.result.in.concat(data.result.out).concat(data.result.pending)).filter(data => data)).sort((a, b) => b.timestamp - a.timestamp);

      // adjust the numbers to display them
      var count;
      for (count = 0; count < this.variables_and_functions_service.transaction_history.length; count++) {
        this.variables_and_functions_service.transaction_history[count].amount = this.variables_and_functions_service.xcash_amount_settings(this.variables_and_functions_service.transaction_history[count].amount, 1);
        this.variables_and_functions_service.transaction_history[count].fee = this.variables_and_functions_service.xcash_amount_settings(this.variables_and_functions_service.transaction_history[count].fee, 1);
      }
    }
    else {
      this.error_title = "Get Transactions";
      this.error_message = data.error.message;
      setTimeout(() => document.getElementById("error").click(), 1000);
    }
  }

  get_transaction_details(count: number) {
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
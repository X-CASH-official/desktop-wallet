import { Component, OnInit } from '@angular/core';
import { variables_and_functions_service } from 'src/app/services/variables_and_functions.service';

import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wallet-dashboard',
  templateUrl: './wallet-dashboard.component.html',
  styleUrls: ['./wallet-dashboard.component.scss'],
})
export class WalletDashboardComponent implements OnInit {
  
  constructor(private variables_and_functions_service: variables_and_functions_service, config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
   }
  
  walletsList: Array<object> = [
    {
      name: "Wallet name",
      address: "XCA1vVaMrUw7Tjz3Y9beuby7pcEF39gMWc8ZtEvsI8pMlWCo5pGdiTk4imZIeqoIGkRYMWe3tKTuPlOov5UPkphDjDFvUtY1m2",
      balance: 123423245
    },
    {
      name: "Salary",
      address: "XCA1o8eRrUw7Tjz3Y9beuby7pcEF39gMWc8ZtEvsI8pMlWCo5pGdiTk4imZIeqoIGkRYMWe3tKTuPlOov5UPkphDjDFvUtY3pZ",
      balance: 18240890
    },
    {
      name: "Fundings",
      address: "XCA1vpziZUw7Tjz3Y9beuby7pcEF39gMWc8ZtEvsI8pMlWCo5pGdiTk4imZIeqoIGkRYMWe3tKTuPlOov5UPkphDjDFvUtm0sZ",
      balance: 20640789
    },
    {
      name: "Charities",
      address: "XCA1ks9ZrUw7Tjz3Y9beuby7pcEF39gMWc8ZtEvsI8pMlWCo5pGdiTk4imZIeqoIGkRYMWe3tKTuPlOov5UPkphDjDFvUtnx0p",
      balance: 1960740
    }
  ];


  ngOnInit() {
  }
  
}

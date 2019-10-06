import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  maxAmountSwitch: boolean = false;
  placement: any;

  constructor() { }

  ngOnInit() {
  }

  resetModelData() {
    this.maxAmountSwitch = false;
  }

}

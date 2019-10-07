import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  maxAmountSwitch: boolean = false;

  @ViewChild('sendConfirmationModal') sendConfirmationModal: any;
  sendConfirmationLoading: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  resetModelData() {
    this.maxAmountSwitch = false;
  }

  simulateLoadingThenHide() {
    this.sendConfirmationLoading = true;
    setTimeout(() => {
      this.sendConfirmationModal.hide();
      setTimeout(() => {
        this.sendConfirmationLoading = false;
      }, 300); // The time of the modal hiding animation
    }, 1500); // Arbitrary waiting time
  }



}

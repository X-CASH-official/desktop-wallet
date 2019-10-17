import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-delete-wallet-modal',
  templateUrl: './delete-wallet-modal.component.html',
  styleUrls: ['./delete-wallet-modal.component.scss']
})
export class DeleteWalletModalComponent implements OnInit {
  @ViewChild('deleteWalletModal1') deleteWalletModal1;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.deleteWalletModal1.show();
  }

}

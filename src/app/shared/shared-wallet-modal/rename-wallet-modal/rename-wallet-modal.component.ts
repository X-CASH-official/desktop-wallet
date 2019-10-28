import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rename-wallet-modal',
  templateUrl: './rename-wallet-modal.component.html',
  styleUrls: ['./rename-wallet-modal.component.scss']
})
export class RenameWalletModalComponent implements OnInit {
  @ViewChild('renameWallet') renameWallet;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.renameWallet.show();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { WalletListService } from 'src/app/services/wallet-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-wallet-modal',
  templateUrl: './delete-wallet-modal.component.html',
  styleUrls: ['./delete-wallet-modal.component.scss']
})
export class DeleteWalletModalComponent implements OnInit {
  @ViewChild('deleteWalletModal1') deleteWalletModal1;

  walletIdToDelete: number;

  constructor(private walletListService: WalletListService, private router: Router) { }

  ngOnInit() {
  }

  show(walletIdToDelete: number) {
    this.walletIdToDelete = walletIdToDelete;
    this.deleteWalletModal1.show();
  }

  onRemoveWallet() {
    if (this.router.url.startsWith('/wallet-dashboard/wallet/')) {
      this.router.navigate(['/wallet-dashboard']);
    }
    this.walletListService.removeWallet(this.walletIdToDelete);
  }

}

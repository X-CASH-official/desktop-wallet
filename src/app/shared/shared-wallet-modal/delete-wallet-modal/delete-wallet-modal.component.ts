import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-delete-wallet-modal',
  templateUrl: './delete-wallet-modal.component.html',
  styleUrls: ['./delete-wallet-modal.component.scss']
})
export class DeleteWalletModalComponent implements OnInit {
  @ViewChild('deleteWalletModal1') deleteWalletModal1;

  walletIdToDelete: number;

  constructor(private actionsService: ActionsService, private router: Router) { }

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
    this.actionsService.removeWallet(this.walletIdToDelete);
  }

}

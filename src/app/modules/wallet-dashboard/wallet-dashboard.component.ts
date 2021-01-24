import { Component, OnInit } from '@angular/core';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';

import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { WalletListService } from 'src/app/services/wallet-list.service';
import { BehaviorSubject } from 'rxjs';
import { Wallet } from 'src/app/models/wallet.model';

@Component({
  selector: 'app-wallet-dashboard',
  templateUrl: './wallet-dashboard.component.html',
  styleUrls: ['./wallet-dashboard.component.scss'],
})
export class WalletDashboardComponent implements OnInit {
  
  constructor(private walletListService: WalletListService, config: NgbDropdownConfig, private RpcCallsService: RpcCallsService) {
    config.placement = 'bottom-right';
   }  
  walletList$: BehaviorSubject<Wallet[]>;

  async ngOnInit() {
    this.walletList$ = this.walletListService.getWalletList(); 
  }

async ngOnDestroy() {
    await this.RpcCallsService.closeWallet(0);
  }

}

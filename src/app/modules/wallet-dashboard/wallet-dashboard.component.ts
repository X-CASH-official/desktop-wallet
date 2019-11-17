import { Component, OnInit } from '@angular/core';
import { variables_and_functions_service } from 'src/app/services/variables_and_functions.service';

import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { WalletListService } from 'src/app/services/wallet-list.service';
import { Wallet } from 'src/app/models/wallet-list.models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-wallet-dashboard',
  templateUrl: './wallet-dashboard.component.html',
  styleUrls: ['./wallet-dashboard.component.scss'],
})
export class WalletDashboardComponent implements OnInit {
  
  constructor(private walletListService: WalletListService, config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
   }
  
  walletList$: BehaviorSubject<Wallet[]>;

  ngOnInit() {
    this.walletList$ = this.walletListService.getWalletList();
  }

}

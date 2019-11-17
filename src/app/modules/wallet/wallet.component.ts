import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { interval } from 'rxjs/observable/interval';
import { Wallet } from 'src/app/models/wallet-list.models';
import { WalletListService } from 'src/app/services/wallet-list.service';
import { XcashPriceIndexService } from 'src/app/services/xcash-price-index.service';
import { flatMap, takeUntil, switchMap, catchError, startWith } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  
  selectedWallet: number;
  
  constructor(private router: Router, private walletListService: WalletListService, private xcashPriceIndexService: XcashPriceIndexService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.selectedWallet = this.router.getCurrentNavigation().extras.state.walletId;
      //console.log("Wallet selected:", this.selectedWallet);
    } else {
      console.error("Illegal navigation: you must provide a walletId attribute in the state of the route when routing to the wallet module.");
    }
  }
  
  walletData: Wallet;
  walletListSubscription: Subscription;
  
  ngOnInit() {
    this.walletListSubscription = this.walletListService.getWalletList().subscribe((newWalletList) => {
      this.walletData = newWalletList[this.selectedWallet];
    });
  }

  ngOnDestroy() {
    this.walletListSubscription.unsubscribe();
  }
}

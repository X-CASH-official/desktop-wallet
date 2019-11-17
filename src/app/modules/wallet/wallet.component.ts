import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Wallet } from 'src/app/models/wallet-list.models';
import { WalletListService } from 'src/app/services/wallet-list.service';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  maxAmountSwitch: boolean = false;

  sendConfirmationLoading: boolean = false;

  selectedWallet: number;

  constructor(private router: Router, private walletListService: WalletListService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.selectedWallet = this.router.getCurrentNavigation().extras.state.walletId;
      console.log("Wallet selected:", this.selectedWallet);
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

  resetModelData() {
    this.maxAmountSwitch = false;
  }

  simulateLoadingThenHide(modalElement: UiModalComponent, loadingTime: number, hidingBooleanName: string) {
    // I'm sure there's a way to avoid this
    this[hidingBooleanName] = true;
    setTimeout(() => {
      modalElement.hide();
      setTimeout(() => {
        this[hidingBooleanName] = false;
      }, 300); // The time of the modal hiding animation
    }, loadingTime);
  }



}

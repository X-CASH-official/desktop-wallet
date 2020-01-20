import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WalletListService } from 'src/app/services/wallet-list.service';
import { XcashPriceIndexService } from 'src/app/services/xcash-price-index.service';
import { Wallet } from 'src/app/models/wallet.model';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  
  selectedWallet: number;
  
  constructor(private router: Router, private walletListService: WalletListService, private xcashPriceIndexService: XcashPriceIndexService, private RpcCallsService: RpcCallsService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.selectedWallet = this.router.getCurrentNavigation().extras.state.walletId;
      //console.log("Wallet selected:", this.selectedWallet);
    } else {
      console.error("Illegal navigation: you must provide a walletId attribute in the state of the route when routing to the wallet module.");
    }
  }
  
  walletData: Wallet;
  walletListSubscription: Subscription;

  xcashPriceIndexSub: Subscription;
  USDforXCASH: number;

  
 async ngOnInit() {
    this.walletListSubscription = this.walletListService.getWalletList().subscribe((newWalletList) => {
      //console.log(newWalletList);
      this.walletData = newWalletList[this.selectedWallet];
    });

    // Update the balance
    this.walletData.balance = await this.RpcCallsService.getBalance();
    setInterval(async() => this.walletData.balance = await this.RpcCallsService.getBalance(), 60000);

    this.xcashPriceIndexSub = this.xcashPriceIndexService.getPrice().subscribe(
      (value) => {
        // We should store the last balance in dollar in the the wallet data and refresh it here
        // in order to avoid having to wait for the http request before displaying anything 
        this.USDforXCASH = value['x-cash']['usd'];
        console.log('update on xcash index')
      }, 
      (err) => {
        console.error("Could not reach CoinGecko for XCASH price index in USD.", err);
      }
    )
  }

  getBalance()
  {

  }

  ngOnDestroy() {
    this.walletListSubscription.unsubscribe();
    this.xcashPriceIndexSub.unsubscribe();
  }
}

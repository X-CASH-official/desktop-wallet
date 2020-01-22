import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WalletListService } from 'src/app/services/wallet-list.service';
import { XcashPriceIndexService } from 'src/app/services/xcash-price-index.service';
import { Wallet } from 'src/app/models/wallet.model';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';
import { DatabaseService } from 'src/app/services/database.service';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';

@Component({
  selector: 'app-wallet-details',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  @ViewChild('wallet_password', {static: true}) wallet_password: ElementRef;
  @ViewChild('openwalletmodal', { static: true }) openwalletmodal: UiModalComponent;
  @ViewChild('openwalletloadingmodal', { static: true }) openwalletloadingmodal: UiModalComponent;
  
  selectedWallet: number;
  
  constructor(private router: Router, private walletListService: WalletListService, private xcashPriceIndexService: XcashPriceIndexService, private RpcCallsService: RpcCallsService, private DatabaseService: DatabaseService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.selectedWallet = this.router.getCurrentNavigation().extras.state.walletId;
    } else {
      console.error("Illegal navigation: you must provide a walletId attribute in the state of the route when routing to the wallet module.");
    }
  }
  
  walletData: Wallet;
  walletListSubscription: Subscription;

  xcashPriceIndexSub: Subscription;
  USDforXCASH: number;
  data:string = "Open Wallet";

  
 ngOnInit() {
    this.openwalletmodal.show();    
  }

  async openWallet()
  {  
    try
    {
      this.openwalletmodal.hide();
      this.openwalletloadingmodal.show(); 
      await this.RpcCallsService.openWallet(this.wallet_password.nativeElement.value);
      this.openwalletloadingmodal.hide();
      this.loadWallet();
    }
    catch(error)
    {
      this.data = "Open Wallet - Invalid Password";
      this.openwalletloadingmodal.hide()
      this.openwalletmodal.show();
      this.wallet_password.nativeElement.value = "";
    }
  }

  async loadWallet()
  {
    this.walletListSubscription = this.walletListService.getWalletList().subscribe((newWalletList) => {
      this.walletData = newWalletList[this.selectedWallet];
    });

    // get the public address
    this.walletData.publicKey = await this.RpcCallsService.getPublicAddress();

    // Update the balance
    this.walletData.balance = await this.RpcCallsService.getBalance();
    setInterval(async() => {
      this.walletData.balance = await this.RpcCallsService.getBalance();
      await this.DatabaseService.updateWalletBalance(this.walletData.balance);
    }, 360000);

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

  ngOnDestroy() {
    this.walletListSubscription.unsubscribe();
    this.xcashPriceIndexSub.unsubscribe();
  }
}

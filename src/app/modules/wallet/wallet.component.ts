import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
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
  @ViewChild('wallet_password_view_private_keys', {static: true}) wallet_password_view_private_keys: ElementRef;
  @ViewChild('confirmopenwalletmodal', { static: true }) confirmopenwalletmodal: UiModalComponent;
  @ViewChild('viewprivatekeyswalletmodal', { static: true }) viewprivatekeyswalletmodal: UiModalComponent;
  @ViewChild('current_wallet_password', {static: true}) current_wallet_password: ElementRef;
  @ViewChild('new_wallet_password', {static: true}) new_wallet_password: ElementRef;
  @ViewChild('changepasswordmodal', { static: true }) changepasswordmodal: UiModalComponent;
  @ViewChild('changepasswordstatusmodal', { static: true }) changepasswordstatusmodal: UiModalComponent;
  
  selectedWallet: number;
  privatekeys:any = {"seed":"","viewkey":"","spendkey":""};
  userActivity;
  //userInactive: Subject<any> = new Subject();
  
  constructor(private router: Router, private walletListService: WalletListService, private xcashPriceIndexService: XcashPriceIndexService, private RpcCallsService: RpcCallsService, private DatabaseService: DatabaseService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.selectedWallet = this.router.getCurrentNavigation().extras.state.walletId;
    } else {
      console.error("Illegal navigation: you must provide a walletId attribute in the state of the route when routing to the wallet module.");
    }
    //this.setTimeout();
    /*this.userInactive.subscribe(async() => {
      this.walletListSubscription.unsubscribe();
      this.xcashPriceIndexSub.unsubscribe();
      this.userInactive.unsubscribe();
      await this.RpcCallsService.closeWallet(0);
      this.router.navigate(["/login"]);
    });*/
  }
  
  walletData: Wallet;
  walletListSubscription: Subscription;

  xcashPriceIndexSub: Subscription;
  USDforXCASH: number;
  data:string = "Open Wallet";
  changepassworddata:string = "";

  /*setTimeout() {
    if (this.DatabaseService.AUTOLOCKSETTINGS !== 0)
    {
      this.userActivity = setTimeout(() => this.userInactive.next(undefined), this.DatabaseService.AUTOLOCKSETTINGS);
    }
  }*/

 /* @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }*/

  
 ngOnInit() {
    this.openwalletmodal.show();    
  }

  async openWallet()
  {  
    try
    {
      this.openwalletmodal.hide();
      this.openwalletloadingmodal.show(); 
      await this.RpcCallsService.closeWallet(0);      
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

  async viewprivatekeys()
  {
    try
    {
      await this.RpcCallsService.changePassword(this.wallet_password_view_private_keys.nativeElement.value,this.wallet_password_view_private_keys.nativeElement.value);
      this.privatekeys = await this.RpcCallsService.getPrivateKeys();
      this.confirmopenwalletmodal.hide();
      this.viewprivatekeyswalletmodal.show();
      this.wallet_password_view_private_keys.nativeElement.value = "";
    }
    catch(error)
    {
      this.wallet_password_view_private_keys.nativeElement.value = "Invalid Password";
    }
  }

toggleCopyTooltip(tooltip) {
    if (!tooltip.isOpen()) {
      tooltip.open();
      setTimeout(() => {
        tooltip.close();
      }, 2000);
    }
  }

  async changepassword()
  {
    try
    {
      await this.RpcCallsService.changePassword(this.current_wallet_password.nativeElement.value,this.new_wallet_password.nativeElement.value);
      this.changepassworddata = "The password was successfully changed";
    }
    catch(error)
    {
      this.changepassworddata = "The password could not be changed";
    }
    finally
    {
      this.changepasswordmodal.hide();
      this.changepasswordstatusmodal.show();
      this.current_wallet_password.nativeElement.value = "";
      this.new_wallet_password.nativeElement.value = "";
    }
  }

  async ngOnDestroy() {
    this.walletListSubscription.unsubscribe();
    this.xcashPriceIndexSub.unsubscribe();
//    this.userInactive.unsubscribe();
    //await this.RpcCallsService.closeWallet(0);
  }
}

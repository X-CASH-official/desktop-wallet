import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { WalletHistoryComponent } from './wallet-history/wallet-history.component';
import { WalletSettingsComponent } from './wallet-settings/wallet-settings.component';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { WalletTransactionsComponent } from './wallet-transactions/wallet-transactions.component';
import { WalletAddressesComponent } from './wallet-addresses/wallet-addresses.component';
import { WalletSignDataComponent } from './wallet-sign-data/wallet-sign-data.component';
import { WalletReserveProofComponent } from './wallet-reserve-proof/wallet-reserve-proof.component';

@NgModule({
  declarations: [WalletComponent, WalletHistoryComponent, WalletSettingsComponent, WalletTransactionsComponent, WalletAddressesComponent, WalletSignDataComponent, WalletReserveProofComponent],
  imports: [
    CommonModule,
    WalletRoutingModule,
    SharedModule,
    NgbTabsetModule,
  ]
})
export class WalletModule { }

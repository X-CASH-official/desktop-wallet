import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { WalletHistoryComponent } from './wallet-history/wallet-history.component';
import { WalletSettingsComponent } from './wallet-settings/wallet-settings.component';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [WalletComponent, WalletHistoryComponent, WalletSettingsComponent],
  imports: [
    CommonModule,
    WalletRoutingModule,
    SharedModule,
    NgbTabsetModule,
  ]
})
export class WalletModule { }

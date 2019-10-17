import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../theme/shared/shared.module';
import {NgbProgressbarModule, NgbDropdownModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

import { WalletDashboardComponent } from './wallet-dashboard.component';

import { WalletHomeRoutingModule } from './wallet-dashboard-routing.module';
import { SharedWalletModalModule } from '../shared-wallet-modal/shared-wallet-modal.module';

@NgModule({
  declarations: [WalletDashboardComponent],
  imports: [
    CommonModule,
    WalletHomeRoutingModule,
    SharedModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    NgbTabsetModule,
    SharedWalletModalModule
  ]
})
export class WalletDashboardModule { }

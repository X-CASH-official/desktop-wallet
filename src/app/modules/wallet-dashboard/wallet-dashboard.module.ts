import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../theme/shared/shared.module';
import {NgbProgressbarModule, NgbDropdownModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

import { WalletDashboardComponent } from './wallet-dashboard.component';

import { WalletHomeRoutingModule } from './wallet-dashboard-routing.module';
import { SharedWalletModalModule } from '../shared-wallet-modal/shared-wallet-modal.module';
import { CreateWalletModalComponent } from './create-wallet-modal/create-wallet-modal.component';

@NgModule({
  declarations: [WalletDashboardComponent, CreateWalletModalComponent],
  imports: [
    CommonModule,
    WalletHomeRoutingModule,
    SharedModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    NgbTabsetModule,
    SharedWalletModalModule,
  ]
})
export class WalletDashboardModule { }

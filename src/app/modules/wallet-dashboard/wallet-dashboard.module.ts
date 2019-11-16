import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../theme/shared/shared.module';
import {NgbProgressbarModule, NgbDropdownModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

import { WalletDashboardComponent } from './wallet-dashboard.component';

import { WalletHomeRoutingModule } from './wallet-dashboard-routing.module';
import { SharedWalletModalModule } from '../../shared/shared-wallet-modal/shared-wallet-modal.module';
import { CreateWalletModalComponent } from './create-wallet-modal/create-wallet-modal.component';
import { ClipboardModule } from 'ngx-clipboard';
import { SharedPipesModule } from 'src/app/shared/shared-pipes/shared-pipes.module';
import { ImportWalletModalComponent } from './import-wallet-modal/import-wallet-modal.component';
import { WalletNamePasswordModalComponent } from './wallet-name-password-modal/wallet-name-password-modal.component';

@NgModule({
  declarations: [
    WalletDashboardComponent, 
    CreateWalletModalComponent, 
    ImportWalletModalComponent, WalletNamePasswordModalComponent,
  ],
  imports: [
    CommonModule,
    WalletHomeRoutingModule,
    SharedModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    NgbTabsetModule,
    SharedWalletModalModule,
    ClipboardModule,
    SharedPipesModule,
  ]
})
export class WalletDashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { WalletTransactionsComponent } from './wallet-transactions/wallet-transactions.component';
import { WalletAddressesComponent } from './wallet-addresses/wallet-addresses.component';
import { WalletSignDataComponent } from './wallet-sign-data/wallet-sign-data.component';
import { WalletReserveProofComponent } from './wallet-reserve-proof/wallet-reserve-proof.component';
import { SharedWalletModalModule } from '../../shared/shared-wallet-modal/shared-wallet-modal.module';
import { MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { SharedPipesModule } from 'src/app/shared/shared-pipes/shared-pipes.module';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    WalletComponent, 
    WalletTransactionsComponent, 
    WalletAddressesComponent, 
    WalletSignDataComponent, 
    WalletReserveProofComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    SharedModule,
    NgbTabsetModule,
    SharedWalletModalModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    SharedPipesModule,
    ClipboardModule,
    NgbTooltipModule,
  ]
})
export class WalletModule { }

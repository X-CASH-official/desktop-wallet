import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

import { NgbTabsetModule, NgbTooltipModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { WalletTransactionsComponent } from './wallet-transactions/wallet-transactions.component';
import { WalletAdvancedComponent } from './wallet-advanced/wallet-advanced.component';
import { WalletStakingComponent } from './wallet-staking/wallet-staking.component';
import { WalletIntegratedAddressComponent } from './wallet-integrated-address/wallet-integrated-address.component';
import { WalletSignDataComponent } from './wallet-sign-data/wallet-sign-data.component';
import { WalletReserveProofComponent } from './wallet-reserve-proof/wallet-reserve-proof.component';
import { SharedWalletModalModule } from '../../shared/shared-wallet-modal/shared-wallet-modal.module';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { SharedPipesModule } from 'src/app/shared/shared-pipes/shared-pipes.module';
import { ClipboardModule } from 'ngx-clipboard';
import { WalletSubAddressComponent } from './wallet-sub-address/wallet-sub-address.component';
import { WalletSendModalComponent } from './wallet-send-modal/wallet-send-modal.component';
import { XcashPublicAddressPipe } from 'src/app/pipes/xcash-public-address.pipe';

@NgModule({
  declarations: [
    WalletComponent, 
    WalletTransactionsComponent, 
    WalletAdvancedComponent,
    WalletStakingComponent, 
    WalletIntegratedAddressComponent,
    WalletSignDataComponent, 
    WalletReserveProofComponent, 
    WalletSubAddressComponent, WalletSendModalComponent
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
    NgbTypeaheadModule,
  ],
})
export class WalletModule { }

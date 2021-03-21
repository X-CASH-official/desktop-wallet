import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletComponent } from './wallet.component';
import { WalletTransactionsComponent } from './wallet-transactions/wallet-transactions.component';
import { WalletAdvancedComponent } from './wallet-advanced/wallet-advanced.component';
import { WalletStakingComponent } from './wallet-staking/wallet-staking.component';
import { WalletIntegratedAddressComponent } from './wallet-integrated-address/wallet-integrated-address.component';
import { WalletSignDataComponent } from './wallet-sign-data/wallet-sign-data.component';
import { WalletReserveProofComponent } from './wallet-reserve-proof/wallet-reserve-proof.component';
import { WalletSubAddressComponent } from './wallet-sub-address/wallet-sub-address.component';

const routes: Routes = [
  {
    path: '',
    component: WalletComponent,
    children: [
      {
        path: 'transactions',
        component: WalletTransactionsComponent,
      },
      {
        path: 'staking',
        component: WalletStakingComponent,
      },
      {
        path: 'advanced',
        component: WalletAdvancedComponent,
      },
      {
        path: 'integrated-address',
        component: WalletIntegratedAddressComponent,
      },
      {
        path: 'sub-address',
        component: WalletSubAddressComponent,
      },
      {
        path: 'sign-data',
        component: WalletSignDataComponent,
      },
      {
        path: 'reserve-proof',
        component: WalletReserveProofComponent,
      },
      {
        path: '',
        redirectTo: 'transactions',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }

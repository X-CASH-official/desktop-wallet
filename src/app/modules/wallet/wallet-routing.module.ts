import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletComponent } from './wallet.component';
import { WalletTransactionsComponent } from './wallet-transactions/wallet-transactions.component';
import { WalletIntegratedAddressComponent } from './wallet-integrated-address/wallet-integrated-address.component';
import { WalletSignDataComponent } from './wallet-sign-data/wallet-sign-data.component';
import { WalletReserveProofComponent } from './wallet-reserve-proof/wallet-reserve-proof.component';

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
        path: 'integrated-address',
        component: WalletIntegratedAddressComponent,
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletComponent } from './wallet.component';
import { WalletHistoryComponent } from './wallet-history/wallet-history.component';
import { WalletSettingsComponent } from './wallet-settings/wallet-settings.component';
import { WalletTransactionsComponent } from './wallet-transactions/wallet-transactions.component';
import { WalletAddressesComponent } from './wallet-addresses/wallet-addresses.component';
import { WalletSignDataComponent } from './wallet-sign-data/wallet-sign-data.component';
import { WalletReserveProofComponent } from './wallet-reserve-proof/wallet-reserve-proof.component';

const routes: Routes = [
  {
    path: '',
    component: WalletComponent,
    children: [
      { 
        path: 'history',
        component: WalletHistoryComponent,
      },
      {
        path: 'settings',
        component: WalletSettingsComponent,
      },
      {
        path: 'advanced',
        loadChildren: './wallet-advanced/wallet-advanced.module#WalletAdvancedModule'
      },
      {
        path: 'transactions',
        component: WalletTransactionsComponent,
      },
      {
        path: 'addresses',
        component: WalletAddressesComponent,
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

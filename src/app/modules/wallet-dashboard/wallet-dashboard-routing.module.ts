import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletDashboardComponent } from './wallet-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: WalletDashboardComponent
  },
  {
    path: 'wallet',
    loadChildren: '../wallet/wallet.module#WalletModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletHomeRoutingModule { }

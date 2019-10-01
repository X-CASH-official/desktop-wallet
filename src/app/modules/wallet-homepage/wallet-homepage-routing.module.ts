import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletHomepageComponent } from './wallet-homepage.component';

const routes: Routes = [
  {
    path: '',
    component: WalletHomepageComponent
  },
  {
    path: 'wallet',
    loadChildren: './wallet/wallet.module#WalletModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletHomeRoutingModule { }

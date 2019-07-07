import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'change_password',
        loadChildren: './change_password/change_password.module#change_passwordModule'
      },
      {
        path: 'rescan_blockchain',
        loadChildren: './rescan_blockchain/rescan_blockchain.module#rescan_blockchainModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class advanced_wallet_functionsRoutingModule { }

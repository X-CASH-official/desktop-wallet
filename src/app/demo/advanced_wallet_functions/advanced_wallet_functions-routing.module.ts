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
      },
      {
        path: 'create_integrated_address',
        loadChildren: './create_integrated_address/create_integrated_address.module#create_integrated_addressModule'
      },
      {
        path: 'create_sub_address',
        loadChildren: './create_sub_address/create_sub_address.module#create_sub_addressModule'
      },
      {
        path: 'get_tx_private_key',
        loadChildren: './get_tx_private_key/get_tx_private_key.module#get_tx_private_keyModule'
      },
      {
        path: 'verify_tx_private_key',
        loadChildren: './verify_tx_private_key/verify_tx_private_key.module#verify_tx_private_keyModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class advanced_wallet_functionsRoutingModule { }

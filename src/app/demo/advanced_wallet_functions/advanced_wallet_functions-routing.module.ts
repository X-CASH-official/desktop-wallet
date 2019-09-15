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
      },
      {
        path: 'create_reserve_proof',
        loadChildren: './create_reserve_proof/create_reserve_proof.module#create_reserve_proofModule'
      },
      {
        path: 'verify_reserve_proof',
        loadChildren: './verify_reserve_proof/verify_reserve_proof.module#verify_reserve_proofModule'
      },
      {
        path: 'sign_data',
        loadChildren: './sign_data/sign_data.module#sign_dataModule'
      },
      {
        path: 'verify_data',
        loadChildren: './verify_data/verify_data.module#verify_dataModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class advanced_wallet_functionsRoutingModule { }

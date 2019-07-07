import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#dashboardModule'
      },
      {
        path: 'send',
        loadChildren: './send/send.module#sendModule'
      },
      {
        path: 'view_public_address',
        loadChildren: './view_public_address/view_public_address.module#view_public_addressModule'
      },
      {
        path: 'view_private_keys',
        loadChildren: './view_private_keys/view_private_keys.module#view_private_keysModule'
      },
      {
        path: 'address_book',
        loadChildren: './address_book/address_book.module#address_bookModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class basic_wallet_functionsRoutingModule { }

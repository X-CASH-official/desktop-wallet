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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class basic_wallet_functionsRoutingModule { }

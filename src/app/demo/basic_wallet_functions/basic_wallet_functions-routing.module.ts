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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class basic_wallet_functionsRoutingModule { }

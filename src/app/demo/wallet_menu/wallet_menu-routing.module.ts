import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'main_menu',
        loadChildren: './main_menu/main_menu.module#main_menuModule'
      },
      {
        path: 'wallet_connection_settings',
        loadChildren: './wallet_connection_settings/wallet_connection_settings.module#wallet_connection_settingsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class wallet_menuRoutingModule { }

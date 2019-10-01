import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletComponent } from './wallet.component';
import { WalletHistoryComponent } from './wallet-history/wallet-history.component';
import { WalletSettingsComponent } from './wallet-settings/wallet-settings.component';

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
        path: '',
        redirectTo: 'history',
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

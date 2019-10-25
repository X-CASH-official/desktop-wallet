import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'wallet-dashboard',
        pathMatch: 'full'
      },
      {
        path: 'wallet-dashboard',
        loadChildren: './modules/wallet-dashboard/wallet-dashboard.module#WalletDashboardModule'
      },
      {
        path: 'contacts',
        loadChildren: './modules/contacts/contacts.module#ContactsModule'
      },
      {
        path: 'settings',
        loadChildren: './modules/settings/settings.module#SettingsModule'
      },
      {
        path: '**',
        redirectTo: 'wallet-dashboard',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  // Pre-Loading of modules : modules will be loaded in the background asynchronously just after the application is started
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  }, 
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard], // Maybe this line is overkill because AdminComponent cannot be called without a child
    canActivateChild: [AuthGuard],
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
      
    ]
  }, 
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  // Pre-Loading of modules : modules will be loaded in the background asynchronously just after the application is started
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

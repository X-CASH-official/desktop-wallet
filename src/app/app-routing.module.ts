import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'wallet-homepage',
        pathMatch: 'full'
      },
      {
        path: 'wallet-homepage',
        loadChildren: './modules/wallet-homepage/wallet-homepage.module#WalletHomepageModule'
      },
      {
        path: 'contacts',
        loadChildren: './modules/contacts/contacts.module#ContactsModule'
      },
      {
        path: '**',
        redirectTo: 'wallet-homepage',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

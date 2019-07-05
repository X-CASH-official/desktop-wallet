import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        loadChildren: './default/default.module#DefaultModule'
      },
      {
        path: 'e-commerce',
        loadChildren: './ecommerce/ecommerce.module#EcommerceModule'
      },
      {
        path: 'crm',
        loadChildren: './dash-crm/dash-crm.module#DashCrmModule'
      },
      {
        path: 'analytics',
        loadChildren: './dash-analytics/dash-analytics.module#DashAnalyticsModule'
      },
      {
        path: 'crypto',
        loadChildren: './dash-crypto/dash-crypto.module#DashCryptoModule'
      },
      {
        path: 'project',
        loadChildren: './dash-project/dash-project.module#DashProjectModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

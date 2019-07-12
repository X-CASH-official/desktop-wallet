import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadChildren: './invoice-basic/invoice-basic.module#InvoiceBasicModule'
      },
      {
        path: 'summary',
        loadChildren: './invoice-summary/invoice-summary.module#InvoiceSummaryModule'
      },
      {
        path: 'list',
        loadChildren: './invoice-list/invoice-list.module#InvoiceListModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }

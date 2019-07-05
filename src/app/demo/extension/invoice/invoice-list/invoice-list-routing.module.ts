import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoiceListComponent} from './invoice-list.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceListRoutingModule { }

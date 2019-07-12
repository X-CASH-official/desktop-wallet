import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoiceBasicComponent} from './invoice-basic.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceBasicRoutingModule { }

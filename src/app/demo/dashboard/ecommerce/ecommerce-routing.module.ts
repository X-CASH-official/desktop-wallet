import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EcommerceComponent} from './ecommerce.component';

const routes: Routes = [
  {
    path: '',
    component: EcommerceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }

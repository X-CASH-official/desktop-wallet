import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {create_integrated_addressComponent} from './create_integrated_address.component';

const routes: Routes = [
  {
    path: '',
    component: create_integrated_addressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class create_integrated_addressRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {create_sub_addressComponent} from './create_sub_address.component';

const routes: Routes = [
  {
    path: '',
    component: create_sub_addressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class create_sub_addressRoutingModule { }

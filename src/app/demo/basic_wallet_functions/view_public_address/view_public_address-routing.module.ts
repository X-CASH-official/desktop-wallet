import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {view_public_addressComponent} from './view_public_address.component';

const routes: Routes = [
  {
    path: '',
    component: view_public_addressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class view_public_addressRoutingModule { }

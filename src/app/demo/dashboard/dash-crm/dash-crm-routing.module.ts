import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashCrmComponent} from './dash-crm.component';

const routes: Routes = [
  {
    path: '',
    component: DashCrmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashCrmRoutingModule { }

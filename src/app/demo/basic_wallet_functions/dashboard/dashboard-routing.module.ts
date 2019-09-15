import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {dashboardComponent} from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: dashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dashboardRoutingModule { }

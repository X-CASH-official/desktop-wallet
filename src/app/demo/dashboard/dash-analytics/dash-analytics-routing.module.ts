import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashAnalyticsComponent} from './dash-analytics.component';

const routes: Routes = [
  {
    path: '',
    component: DashAnalyticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashAnalyticsRoutingModule { }

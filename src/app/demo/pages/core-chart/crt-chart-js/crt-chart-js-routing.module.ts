import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrtChartJsComponent} from './crt-chart-js.component';

const routes: Routes = [
  {
    path: '',
    component: CrtChartJsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrtChartJsRoutingModule { }

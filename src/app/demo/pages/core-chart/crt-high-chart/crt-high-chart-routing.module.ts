import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrtHighChartComponent} from './crt-high-chart.component';

const routes: Routes = [
  {
    path: '',
    component: CrtHighChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrtHighChartRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrtGoogleChartComponent} from './crt-google-chart.component';

const routes: Routes = [
  {
    path: '',
    component: CrtGoogleChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrtGoogleChartRoutingModule { }

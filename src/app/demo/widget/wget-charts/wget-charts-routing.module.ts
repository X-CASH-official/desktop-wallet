import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WgetChartsComponent} from './wget-charts.component';

const routes: Routes = [
  {
    path: '',
    component: WgetChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WgetChartsRoutingModule { }

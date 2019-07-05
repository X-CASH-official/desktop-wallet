import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WgetStatisticComponent} from './wget-statistic.component';

const routes: Routes = [
  {
    path: '',
    component: WgetStatisticComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WgetStatisticRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrtAmchartComponent} from './crt-amchart.component';

const routes: Routes = [
  {
    path: '',
    component: CrtAmchartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrtAmchartRoutingModule { }

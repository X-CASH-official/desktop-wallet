import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrtEchartComponent} from './crt-echart.component';

const routes: Routes = [
  {
    path: '',
    component: CrtEchartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrtEchartRoutingModule { }

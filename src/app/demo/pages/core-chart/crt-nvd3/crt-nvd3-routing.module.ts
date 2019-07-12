import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrtNvd3Component} from './crt-nvd3.component';

const routes: Routes = [
  {
    path: '',
    component: CrtNvd3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrtNvd3RoutingModule { }

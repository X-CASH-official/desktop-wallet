import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrtRadialComponent} from './crt-radial.component';

const routes: Routes = [
  {
    path: '',
    component: CrtRadialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrtRadialRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {sendComponent} from './send.component';

const routes: Routes = [
  {
    path: '',
    component: sendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class sendRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {change_passwordComponent} from './change_password.component';

const routes: Routes = [
  {
    path: '',
    component: change_passwordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class change_passwordRoutingModule { }

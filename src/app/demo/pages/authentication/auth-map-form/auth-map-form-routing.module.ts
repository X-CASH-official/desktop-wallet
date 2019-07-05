import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthMapFormComponent} from './auth-map-form.component';

const routes: Routes = [
  {
    path: '',
    component: AuthMapFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthMapFormRoutingModule { }

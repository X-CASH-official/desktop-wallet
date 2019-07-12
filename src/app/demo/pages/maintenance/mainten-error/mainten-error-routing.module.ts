import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaintenErrorComponent} from './mainten-error.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenErrorRoutingModule { }

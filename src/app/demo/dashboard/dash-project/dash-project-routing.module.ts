import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashProjectComponent} from './dash-project.component';

const routes: Routes = [
  {
    path: '',
    component: DashProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashProjectRoutingModule { }

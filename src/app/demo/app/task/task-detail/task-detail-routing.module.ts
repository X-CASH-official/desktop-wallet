import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskDetailComponent} from './task-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TaskDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskDetailRoutingModule { }

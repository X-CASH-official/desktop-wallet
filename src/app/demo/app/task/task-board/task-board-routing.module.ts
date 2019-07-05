import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskBoardComponent} from './task-board.component';

const routes: Routes = [
  {
    path: '',
    component: TaskBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskBoardRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        loadChildren: './task-list/task-list.module#TaskListModule'
      },
      {
        path: 'board',
        loadChildren: './task-board/task-board.module#TaskBoardModule'
      },
      {
        path: 'detail',
        loadChildren: './task-detail/task-detail.module#TaskDetailModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

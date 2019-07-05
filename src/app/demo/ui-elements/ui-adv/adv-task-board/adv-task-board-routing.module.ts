import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvTaskBoardComponent} from './adv-task-board.component';

const routes: Routes = [
  {
    path: '',
    component: AdvTaskBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvTaskBoardRoutingModule { }

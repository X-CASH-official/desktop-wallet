import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WgetTableComponent} from './wget-table.component';

const routes: Routes = [
  {
    path: '',
    component: WgetTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WgetTableRoutingModule { }

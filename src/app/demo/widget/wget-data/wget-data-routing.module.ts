import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WgetDataComponent} from './wget-data.component';

const routes: Routes = [
  {
    path: '',
    component: WgetDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WgetDataRoutingModule { }

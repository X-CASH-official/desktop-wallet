import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WgetUserCardComponent} from './wget-user-card.component';

const routes: Routes = [
  {
    path: '',
    component: WgetUserCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WgetUserCardRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubscribeComponent} from './subscribe.component';

const routes: Routes = [
  {
    path: '',
    component: SubscribeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscribeRoutingModule { }

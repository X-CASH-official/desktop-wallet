import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvModalComponent} from './adv-modal.component';

const routes: Routes = [
  {
    path: '',
    component: AdvModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvModalRoutingModule { }

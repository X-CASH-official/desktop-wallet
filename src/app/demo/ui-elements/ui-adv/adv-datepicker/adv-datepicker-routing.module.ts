import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvDatepickerComponent} from './adv-datepicker.component';

const routes: Routes = [
  {
    path: '',
    component: AdvDatepickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvDatepickerRoutingModule { }

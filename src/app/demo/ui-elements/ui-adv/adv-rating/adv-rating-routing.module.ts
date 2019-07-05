import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvRatingComponent} from './adv-rating.component';

const routes: Routes = [
  {
    path: '',
    component: AdvRatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvRatingRoutingModule { }

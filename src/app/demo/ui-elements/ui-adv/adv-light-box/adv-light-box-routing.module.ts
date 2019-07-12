import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvLightBoxComponent} from './adv-light-box.component';

const routes: Routes = [
  {
    path: '',
    component: AdvLightBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvLightBoxRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {verify_dataComponent} from './verify_data.component';

const routes: Routes = [
  {
    path: '',
    component: verify_dataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class verify_dataRoutingModule { }

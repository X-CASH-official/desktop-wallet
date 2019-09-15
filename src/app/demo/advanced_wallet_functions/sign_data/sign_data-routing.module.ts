import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {sign_dataComponent} from './sign_data.component';

const routes: Routes = [
  {
    path: '',
    component: sign_dataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class sign_dataRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {view_private_keysComponent} from './view_private_keys.component';

const routes: Routes = [
  {
    path: '',
    component: view_private_keysComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class view_private_keysRoutingModule { }

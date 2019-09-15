import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {main_menuComponent} from './main_menu.component';

const routes: Routes = [
  {
    path: '',
    component: main_menuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class main_menuRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLayout6Component} from './theme-layout6.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayout6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLayout6RoutingModule { }

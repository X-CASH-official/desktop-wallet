import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLayout3Component} from './theme-layout3.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayout3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLayout3RoutingModule { }

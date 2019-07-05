import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLayout44Component} from './theme-layout44.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayout44Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLayout44RoutingModule { }

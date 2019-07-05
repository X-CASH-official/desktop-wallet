import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLayout22Component} from './theme-layout22.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayout22Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLayout22RoutingModule { }

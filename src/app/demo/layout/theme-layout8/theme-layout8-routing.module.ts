import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLayout8Component} from './theme-layout8.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayout8Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLayout8RoutingModule { }

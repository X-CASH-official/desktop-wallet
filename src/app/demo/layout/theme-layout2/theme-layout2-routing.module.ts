import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLayout2Component} from './theme-layout2.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayout2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLayout2RoutingModule { }

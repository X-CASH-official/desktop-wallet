import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLayout4Component} from './theme-layout4.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayout4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLayout4RoutingModule { }

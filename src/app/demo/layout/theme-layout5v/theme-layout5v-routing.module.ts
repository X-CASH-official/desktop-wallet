import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLayout5vComponent} from './theme-layout5v.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayout5vComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLayout5vRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLayout5hComponent} from './theme-layout5h.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLayout5hComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLayout5hRoutingModule { }

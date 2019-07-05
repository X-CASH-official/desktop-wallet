import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeFixedComponent} from './theme-fixed.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeFixedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeFixedRoutingModule { }

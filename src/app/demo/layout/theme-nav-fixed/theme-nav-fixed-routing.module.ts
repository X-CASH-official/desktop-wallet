import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeNavFixedComponent} from './theme-nav-fixed.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeNavFixedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeNavFixedRoutingModule { }

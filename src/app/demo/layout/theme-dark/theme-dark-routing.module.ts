import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeDarkComponent} from './theme-dark.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeDarkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeDarkRoutingModule { }

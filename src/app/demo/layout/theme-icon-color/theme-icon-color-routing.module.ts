import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeIconColorComponent} from './theme-icon-color.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeIconColorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeIconColorRoutingModule { }

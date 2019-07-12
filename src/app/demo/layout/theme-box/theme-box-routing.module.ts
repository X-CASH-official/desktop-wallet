import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeBoxComponent} from './theme-box.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeBoxRoutingModule { }

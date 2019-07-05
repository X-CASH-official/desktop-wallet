import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeNavImageComponent} from './theme-nav-image.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeNavImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeNavImageRoutingModule { }

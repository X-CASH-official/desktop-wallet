import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeRtlComponent} from './theme-rtl.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeRtlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRtlRoutingModule { }

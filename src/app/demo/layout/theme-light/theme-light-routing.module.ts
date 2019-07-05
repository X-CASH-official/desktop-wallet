import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeLightComponent} from './theme-light.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeLightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeLightRoutingModule { }

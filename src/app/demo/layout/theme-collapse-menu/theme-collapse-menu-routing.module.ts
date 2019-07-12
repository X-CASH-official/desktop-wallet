import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThemeCollapseMenuComponent} from './theme-collapse-menu.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeCollapseMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeCollapseMenuRoutingModule { }

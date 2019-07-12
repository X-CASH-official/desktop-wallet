import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaintenComingSoonComponent} from './mainten-coming-soon.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenComingSoonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenComingSoonRoutingModule { }

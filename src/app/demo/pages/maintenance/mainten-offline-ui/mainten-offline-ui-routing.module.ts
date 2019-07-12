import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaintenOfflineUiComponent} from './mainten-offline-ui.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenOfflineUiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenOfflineUiRoutingModule { }

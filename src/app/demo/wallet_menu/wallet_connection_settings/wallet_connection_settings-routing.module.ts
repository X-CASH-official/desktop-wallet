import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {wallet_connection_settingsComponent} from './wallet_connection_settings.component';

const routes: Routes = [
  {
    path: '',
    component: wallet_connection_settingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class wallet_connection_settingsRoutingModule { }

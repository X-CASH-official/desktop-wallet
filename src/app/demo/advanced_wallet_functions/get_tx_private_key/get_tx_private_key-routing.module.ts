import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {get_tx_private_keyComponent} from './get_tx_private_key.component';

const routes: Routes = [
  {
    path: '',
    component: get_tx_private_keyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class get_tx_private_keyRoutingModule { }

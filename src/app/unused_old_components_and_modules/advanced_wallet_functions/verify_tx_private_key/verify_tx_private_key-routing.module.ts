import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {verify_tx_private_keyComponent} from './verify_tx_private_key.component';

const routes: Routes = [
  {
    path: '',
    component: verify_tx_private_keyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class verify_tx_private_keyRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {verify_reserve_proofComponent} from './verify_reserve_proof.component';

const routes: Routes = [
  {
    path: '',
    component: verify_reserve_proofComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class verify_reserve_proofRoutingModule { }

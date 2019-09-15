import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {create_reserve_proofComponent} from './create_reserve_proof.component';

const routes: Routes = [
  {
    path: '',
    component: create_reserve_proofComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class create_reserve_proofRoutingModule { }

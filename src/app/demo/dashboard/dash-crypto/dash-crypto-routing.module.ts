import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashCryptoComponent} from './dash-crypto.component';

const routes: Routes = [
  {
    path: '',
    component: DashCryptoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashCryptoRoutingModule { }

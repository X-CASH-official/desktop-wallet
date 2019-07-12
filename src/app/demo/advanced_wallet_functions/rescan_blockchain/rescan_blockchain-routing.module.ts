import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {rescan_blockchainComponent} from './rescan_blockchain.component';

const routes: Routes = [
  {
    path: '',
    component: rescan_blockchainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class rescan_blockchainRoutingModule { }

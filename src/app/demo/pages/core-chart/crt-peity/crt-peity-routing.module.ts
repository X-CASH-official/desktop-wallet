import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrtPeityComponent} from './crt-peity.component';

const routes: Routes = [
  {
    path: '',
    component: CrtPeityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrtPeityRoutingModule { }

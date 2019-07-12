import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrmAdvanceComponent} from './frm-advance.component';

const routes: Routes = [
  {
    path: '',
    component: FrmAdvanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrmAdvanceRoutingModule { }

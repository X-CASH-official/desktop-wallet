import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrmMaskingComponent} from './frm-masking.component';

const routes: Routes = [
  {
    path: '',
    component: FrmMaskingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrmMaskingRoutingModule { }

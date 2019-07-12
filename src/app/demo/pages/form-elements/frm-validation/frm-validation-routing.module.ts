import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrmValidationComponent} from './frm-validation.component';

const routes: Routes = [
  {
    path: '',
    component: FrmValidationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrmValidationRoutingModule { }

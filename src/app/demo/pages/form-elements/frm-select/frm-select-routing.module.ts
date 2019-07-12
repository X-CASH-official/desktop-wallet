import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrmSelectComponent} from './frm-select.component';

const routes: Routes = [
  {
    path: '',
    component: FrmSelectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrmSelectRoutingModule { }

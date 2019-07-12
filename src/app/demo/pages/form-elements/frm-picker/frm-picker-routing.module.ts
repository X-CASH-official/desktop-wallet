import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrmPickerComponent} from './frm-picker.component';

const routes: Routes = [
  {
    path: '',
    component: FrmPickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrmPickerRoutingModule { }

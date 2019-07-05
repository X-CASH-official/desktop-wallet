import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrmWizardComponent} from './frm-wizard.component';

const routes: Routes = [
  {
    path: '',
    component: FrmWizardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrmWizardRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadChildren: './basic-elements/basic-elements.module#BasicElementsModule'
      },
      {
        path: 'advance',
        loadChildren: './frm-advance/frm-advance.module#FrmAdvanceModule'
      },
      {
        path: 'validation',
        loadChildren: './frm-validation/frm-validation.module#FrmValidationModule'
      },
      {
        path: 'masking',
        loadChildren: './frm-masking/frm-masking.module#FrmMaskingModule'
      },
      {
        path: 'wizard',
        loadChildren: './frm-wizard/frm-wizard.module#FrmWizardModule'
      },
      {
        path: 'picker',
        loadChildren: './frm-picker/frm-picker.module#FrmPickerModule'
      },
      {
        path: 'select',
        loadChildren: './frm-select/frm-select.module#FrmSelectModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementsRoutingModule { }

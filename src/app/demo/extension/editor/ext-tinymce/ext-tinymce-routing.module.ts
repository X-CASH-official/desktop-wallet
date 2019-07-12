import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExtTinymceComponent} from './ext-tinymce.component';

const routes: Routes = [
  {
    path: '',
    component: ExtTinymceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtTinymceRoutingModule { }

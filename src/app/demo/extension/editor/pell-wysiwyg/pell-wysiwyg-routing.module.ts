import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PellWysiwygComponent} from './pell-wysiwyg.component';

const routes: Routes = [
  {
    path: '',
    component: PellWysiwygComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PellWysiwygRoutingModule { }

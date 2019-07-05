import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'wysiwyg',
        loadChildren: './pell-wysiwyg/pell-wysiwyg.module#PellWysiwygModule'
      },
      {
        path: 'tinymce',
        loadChildren: './ext-tinymce/ext-tinymce.module#ExtTinymceModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }

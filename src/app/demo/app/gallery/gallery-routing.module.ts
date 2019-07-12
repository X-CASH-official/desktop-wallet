import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'grid',
        loadChildren: './gallery-grid/gallery-grid.module#GalleryGridModule'
      },
      {
        path: 'masonry',
        loadChildren: './gallery-masonry/gallery-masonry.module#GalleryMasonryModule'
      },
      {
        path: 'advance',
        loadChildren: './gallery-advance/gallery-advance.module#GalleryAdvanceModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }

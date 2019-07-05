import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleryMasonryComponent} from './gallery-masonry.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryMasonryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryMasonryRoutingModule { }

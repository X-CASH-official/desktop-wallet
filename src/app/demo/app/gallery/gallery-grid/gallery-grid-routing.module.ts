import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleryGridComponent} from './gallery-grid.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryGridRoutingModule { }

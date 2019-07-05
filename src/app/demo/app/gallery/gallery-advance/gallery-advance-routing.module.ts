import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleryAdvanceComponent} from './gallery-advance.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryAdvanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryAdvanceRoutingModule { }

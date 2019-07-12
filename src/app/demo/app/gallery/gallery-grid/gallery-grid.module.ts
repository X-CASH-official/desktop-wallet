import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryGridRoutingModule } from './gallery-grid-routing.module';
import { GalleryGridComponent } from './gallery-grid.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GalleryGridRoutingModule,
    SharedModule
  ],
  declarations: [GalleryGridComponent]
})
export class GalleryGridModule { }

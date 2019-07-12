import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryMasonryRoutingModule } from './gallery-masonry-routing.module';
import { GalleryMasonryComponent } from './gallery-masonry.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GalleryMasonryRoutingModule,
    SharedModule
  ],
  declarations: [GalleryMasonryComponent]
})
export class GalleryMasonryModule { }

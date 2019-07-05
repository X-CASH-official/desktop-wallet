import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryAdvanceRoutingModule } from './gallery-advance-routing.module';
import { GalleryAdvanceComponent } from './gallery-advance.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GalleryAdvanceRoutingModule,
    SharedModule
  ],
  declarations: [GalleryAdvanceComponent]
})
export class GalleryAdvanceModule { }

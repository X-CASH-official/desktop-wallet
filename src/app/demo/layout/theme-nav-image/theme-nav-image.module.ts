import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeNavImageRoutingModule } from './theme-nav-image-routing.module';
import { ThemeNavImageComponent } from './theme-nav-image.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeNavImageComponent],
  imports: [
    CommonModule,
    ThemeNavImageRoutingModule,
    SharedModule
  ]
})
export class ThemeNavImageModule { }

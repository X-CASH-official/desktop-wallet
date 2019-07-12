import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeIconColorRoutingModule } from './theme-icon-color-routing.module';
import { ThemeIconColorComponent } from './theme-icon-color.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeIconColorComponent],
  imports: [
    CommonModule,
    ThemeIconColorRoutingModule,
    SharedModule
  ]
})
export class ThemeIconColorModule { }

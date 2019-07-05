import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeBoxRoutingModule } from './theme-box-routing.module';
import { ThemeBoxComponent } from './theme-box.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeBoxComponent],
  imports: [
    CommonModule,
    ThemeBoxRoutingModule,
    SharedModule
  ]
})
export class ThemeBoxModule { }

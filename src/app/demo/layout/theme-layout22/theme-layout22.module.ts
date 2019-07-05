import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLayout22RoutingModule } from './theme-layout22-routing.module';
import { ThemeLayout22Component } from './theme-layout22.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLayout22Component],
  imports: [
    CommonModule,
    ThemeLayout22RoutingModule,
    SharedModule
  ]
})
export class ThemeLayout22Module { }

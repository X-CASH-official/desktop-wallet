import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLayout2RoutingModule } from './theme-layout2-routing.module';
import { ThemeLayout2Component } from './theme-layout2.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLayout2Component],
  imports: [
    CommonModule,
    ThemeLayout2RoutingModule,
    SharedModule
  ]
})
export class ThemeLayout2Module { }

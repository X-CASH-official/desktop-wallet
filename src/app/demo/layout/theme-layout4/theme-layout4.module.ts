import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLayout4RoutingModule } from './theme-layout4-routing.module';
import { ThemeLayout4Component } from './theme-layout4.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLayout4Component],
  imports: [
    CommonModule,
    ThemeLayout4RoutingModule,
    SharedModule
  ]
})
export class ThemeLayout4Module { }

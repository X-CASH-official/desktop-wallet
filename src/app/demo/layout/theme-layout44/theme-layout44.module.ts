import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLayout44RoutingModule } from './theme-layout44-routing.module';
import { ThemeLayout44Component } from './theme-layout44.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLayout44Component],
  imports: [
    CommonModule,
    ThemeLayout44RoutingModule,
    SharedModule
  ]
})
export class ThemeLayout44Module { }

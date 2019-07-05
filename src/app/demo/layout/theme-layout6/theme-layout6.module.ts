import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLayout6RoutingModule } from './theme-layout6-routing.module';
import { ThemeLayout6Component } from './theme-layout6.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLayout6Component],
  imports: [
    CommonModule,
    ThemeLayout6RoutingModule,
    SharedModule
  ]
})
export class ThemeLayout6Module { }

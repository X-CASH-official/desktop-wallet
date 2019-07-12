import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLayout3RoutingModule } from './theme-layout3-routing.module';
import { ThemeLayout3Component } from './theme-layout3.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLayout3Component],
  imports: [
    CommonModule,
    ThemeLayout3RoutingModule,
    SharedModule
  ]
})
export class ThemeLayout3Module { }

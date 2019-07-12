import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLayout8RoutingModule } from './theme-layout8-routing.module';
import { ThemeLayout8Component } from './theme-layout8.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLayout8Component],
  imports: [
    CommonModule,
    ThemeLayout8RoutingModule,
    SharedModule
  ]
})
export class ThemeLayout8Module { }

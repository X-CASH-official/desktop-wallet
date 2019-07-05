import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLayout5vRoutingModule } from './theme-layout5v-routing.module';
import { ThemeLayout5vComponent } from './theme-layout5v.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLayout5vComponent],
  imports: [
    CommonModule,
    ThemeLayout5vRoutingModule,
    SharedModule
  ]
})
export class ThemeLayout5vModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLayout5hRoutingModule } from './theme-layout5h-routing.module';
import { ThemeLayout5hComponent } from './theme-layout5h.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLayout5hComponent],
  imports: [
    CommonModule,
    ThemeLayout5hRoutingModule,
    SharedModule
  ]
})
export class ThemeLayout5hModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeDarkRoutingModule } from './theme-dark-routing.module';
import { ThemeDarkComponent } from './theme-dark.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeDarkComponent],
  imports: [
    CommonModule,
    ThemeDarkRoutingModule,
    SharedModule
  ]
})
export class ThemeDarkModule { }

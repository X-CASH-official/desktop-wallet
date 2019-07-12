import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRtlRoutingModule } from './theme-rtl-routing.module';
import { ThemeRtlComponent } from './theme-rtl.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeRtlComponent],
  imports: [
    CommonModule,
    ThemeRtlRoutingModule,
    SharedModule
  ]
})
export class ThemeRtlModule { }

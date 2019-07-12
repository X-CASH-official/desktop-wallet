import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeHorizontalRoutingModule } from './theme-horizontal-routing.module';
import { ThemeHorizontalComponent } from './theme-horizontal.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeHorizontalComponent],
  imports: [
    CommonModule,
    ThemeHorizontalRoutingModule,
    SharedModule
  ]
})
export class ThemeHorizontalModule { }

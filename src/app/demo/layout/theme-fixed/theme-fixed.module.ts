import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeFixedRoutingModule } from './theme-fixed-routing.module';
import { ThemeFixedComponent } from './theme-fixed.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeFixedComponent],
  imports: [
    CommonModule,
    ThemeFixedRoutingModule,
    SharedModule
  ]
})
export class ThemeFixedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeNavFixedRoutingModule } from './theme-nav-fixed-routing.module';
import { ThemeNavFixedComponent } from './theme-nav-fixed.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeNavFixedComponent],
  imports: [
    CommonModule,
    ThemeNavFixedRoutingModule,
    SharedModule
  ]
})
export class ThemeNavFixedModule { }

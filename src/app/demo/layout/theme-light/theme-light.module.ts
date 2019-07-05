import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeLightRoutingModule } from './theme-light-routing.module';
import { ThemeLightComponent } from './theme-light.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  declarations: [ThemeLightComponent],
  imports: [
    CommonModule,
    ThemeLightRoutingModule,
    SharedModule
  ]
})
export class ThemeLightModule { }

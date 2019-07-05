import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvLightBoxRoutingModule } from './adv-light-box-routing.module';
import { AdvLightBoxComponent } from './adv-light-box.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdvLightBoxRoutingModule,
    SharedModule
  ],
  declarations: [AdvLightBoxComponent]
})
export class AdvLightBoxModule { }

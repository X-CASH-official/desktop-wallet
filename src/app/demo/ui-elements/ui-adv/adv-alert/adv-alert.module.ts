import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvAlertRoutingModule } from './adv-alert-routing.module';
import { AdvAlertComponent } from './adv-alert.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdvAlertRoutingModule,
    SharedModule
  ],
  declarations: [AdvAlertComponent]
})
export class AdvAlertModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashAnalyticsRoutingModule } from './dash-analytics-routing.module';
import { DashAnalyticsComponent } from './dash-analytics.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashAnalyticsRoutingModule,
    SharedModule
  ],
  declarations: [DashAnalyticsComponent]
})
export class DashAnalyticsModule { }

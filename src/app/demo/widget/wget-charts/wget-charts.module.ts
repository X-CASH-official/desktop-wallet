import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WgetChartsRoutingModule } from './wget-charts-routing.module';
import { WgetChartsComponent } from './wget-charts.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    WgetChartsRoutingModule,
    SharedModule
  ],
  declarations: [WgetChartsComponent]
})
export class WgetChartsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrtChartJsRoutingModule } from './crt-chart-js-routing.module';
import { CrtChartJsComponent } from './crt-chart-js.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {ChartModule} from 'angular2-chartjs';

@NgModule({
  imports: [
    CommonModule,
    CrtChartJsRoutingModule,
    SharedModule,
    ChartModule
  ],
  declarations: [CrtChartJsComponent]
})
export class CrtChartJsModule { }

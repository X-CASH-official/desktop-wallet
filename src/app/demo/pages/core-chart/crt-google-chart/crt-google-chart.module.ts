import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrtGoogleChartRoutingModule } from './crt-google-chart-routing.module';
import { CrtGoogleChartComponent } from './crt-google-chart.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    CrtGoogleChartRoutingModule,
    SharedModule,
    Ng2GoogleChartsModule
  ],
  declarations: [CrtGoogleChartComponent]
})
export class CrtGoogleChartModule { }

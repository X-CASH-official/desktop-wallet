import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceSummaryRoutingModule } from './invoice-summary-routing.module';
import { InvoiceSummaryComponent } from './invoice-summary.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {MorrisJsModule} from 'angular-morris-js';

@NgModule({
  imports: [
    CommonModule,
    InvoiceSummaryRoutingModule,
    SharedModule,
    MorrisJsModule
  ],
  declarations: [InvoiceSummaryComponent]
})
export class InvoiceSummaryModule { }

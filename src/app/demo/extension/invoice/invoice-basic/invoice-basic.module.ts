import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceBasicRoutingModule } from './invoice-basic-routing.module';
import { InvoiceBasicComponent } from './invoice-basic.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InvoiceBasicRoutingModule,
    SharedModule
  ],
  declarations: [InvoiceBasicComponent]
})
export class InvoiceBasicModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmMaskingRoutingModule } from './frm-masking-routing.module';
import { FrmMaskingComponent } from './frm-masking.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {TextMaskModule} from 'angular2-text-mask';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {NgNumberFormatterModule} from 'ng-number-formatter';

@NgModule({
  imports: [
    CommonModule,
    FrmMaskingRoutingModule,
    SharedModule,
    TextMaskModule,
    CurrencyMaskModule,
    NgNumberFormatterModule
  ],
  declarations: [FrmMaskingComponent]
})
export class FrmMaskingModule { }

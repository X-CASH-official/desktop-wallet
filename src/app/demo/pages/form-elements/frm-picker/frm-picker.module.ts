import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmPickerRoutingModule } from './frm-picker-routing.module';
import { FrmPickerComponent } from './frm-picker.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {AmazingTimePickerModule} from 'amazing-time-picker';
import {ColorPickerModule} from 'ngx-color-picker';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FrmPickerRoutingModule,
    SharedModule,
    AmazingTimePickerModule,
    ColorPickerModule,
    NgbDatepickerModule
  ],
  declarations: [FrmPickerComponent]
})
export class FrmPickerModule { }

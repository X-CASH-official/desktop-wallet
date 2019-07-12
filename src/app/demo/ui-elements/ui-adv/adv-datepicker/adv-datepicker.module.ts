import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvDatepickerRoutingModule } from './adv-datepicker-routing.module';
import { AdvDatepickerComponent } from './adv-datepicker.component';
import {IcDatepickerModule, IcDatepickerService} from 'ic-datepicker';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerConfigFormComponent } from './datepicker-config-form/datepicker-config-form.component';

@NgModule({
  imports: [
    CommonModule,
    AdvDatepickerRoutingModule,
    SharedModule,
    IcDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgbButtonsModule
  ],
  declarations: [AdvDatepickerComponent, DatepickerConfigFormComponent],
  providers: [IcDatepickerService]
})
export class AdvDatepickerModule { }

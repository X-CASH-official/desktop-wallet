import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullEventCalendarRoutingModule } from './full-event-calendar-routing.module';
import { FullEventCalendarComponent } from './full-event-calendar.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {FullCalendarModule} from 'ng-fullcalendar';
import {EventService} from './event.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FullEventCalendarRoutingModule,
    SharedModule,
    FullCalendarModule,
    FormsModule
  ],
  declarations: [FullEventCalendarComponent],
  providers: [EventService]
})
export class FullEventCalendarModule { }

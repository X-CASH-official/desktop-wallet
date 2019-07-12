import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CalendarComponent} from 'ng-fullcalendar';
import {EventService} from './event.service';
// import {Options} from 'fullcalendar';

@Component({
  selector: 'app-full-event-calendar',
  templateUrl: './full-event-calendar.component.html',
  styleUrls: ['./full-event-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FullEventCalendarComponent implements OnInit {
  calendarOptions: any;
  displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(protected eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
    });
  }

  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    };
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
      },
      duration: {
        _data: model.duration._data
      }
    };
    this.displayEvent = model;
  }

}

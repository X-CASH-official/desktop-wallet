import { Inject, Injectable } from '@angular/core';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class EventService {
  public getEvents(): Observable<any> {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    const data: any = [{
      title: 'All Day Event',
      start: yearMonth + '-01',
      borderColor: '#04a9f5',
      backgroundColor: '#04a9f5',
      textColor: '#fff'
    },
      {
        title: 'Long Event',
        start: yearMonth + '-07',
        end: yearMonth + '-10',
        borderColor: '#f44236',
        backgroundColor: '#f44236',
        textColor: '#fff'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: yearMonth + '-09T16:00:00',
        borderColor: '#f4c22b',
        backgroundColor: '#f4c22b',
        textColor: '#fff'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: yearMonth + '-16T16:00:00',
        borderColor: '#3ebfea',
        backgroundColor: '#3ebfea',
        textColor: '#fff'
      },
      {
        title: 'Conference',
        start: yearMonth + '-11',
        end: yearMonth + '-13',
        borderColor: '#1de9b6',
        backgroundColor: '#1de9b6',
        textColor: '#fff'
      },
      {
        title: 'Meeting',
        start: yearMonth + '-12T10:30:00',
        end: yearMonth + '-12T12:30:00',
        textColor: '#fff'
      },
      {
        title: 'Lunch',
        start: yearMonth + '-12T12:00:00',
        borderColor: '#f44236',
        backgroundColor: '#f44236',
        textColor: '#fff'
      },
      {
        title: 'Meeting',
        start: yearMonth + '-12T14:30:00',
        textColor: '#fff'
      },
      {
        title: 'Happy Hour',
        start: yearMonth + '-12T17:30:00',
        borderColor: '#a389d4',
        backgroundColor: '#a389d4',
        textColor: '#fff'
      },
      {
        title: 'Dinner',
        start: yearMonth + '-12T20:00:00',
        textColor: '#fff'
      },
      {
        title: 'Birthday Party',
        start: yearMonth + '-13T07:00:00',
        textColor: '#fff'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: yearMonth + '-28',
        borderColor: '#a389d4',
        backgroundColor: '#a389d4',
        textColor: '#fff'
      }];
    return Observable.of(data);
  }
}

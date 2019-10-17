import { Component, OnInit } from '@angular/core';

import { FAKE_CONTACTS } from 'src/fake-data/fake-contacts';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {
  
  contactsTableOptions: any = {};
  
  fakeContacts: object[];

  dtTrigger: Subject<any> = new Subject();
  hide: boolean = true;

  readonly addrSliceSize: number = 10;
  
  constructor() { }
  
  ngOnInit() {

    setTimeout(() => {
      this.hide = true;
      this.fakeContacts = FAKE_CONTACTS;
      this.dtTrigger.next();
      setTimeout(() => {
        this.hide = false;
      }, 0); // Avoid blinking due to table construction and ngFor
    }, 0); // simulate loading

    
    this.contactsTableOptions = {
      "columns": [
        { "searchable": false },
        null,
        { 
          mRender: function ( data, type, row ) {
          if (type === 'display') {
            return data.slice(0, this.addrSliceSize) + "..." + data.slice(-this.addrSliceSize);
          }
          return data;
          }.bind(this)
        },
        {
          orderable: false,
        }
      ]
      
      /*
      data: FAKE_CONTACTS,
      columns: [
        { 
          data: 'id',
          title: 'ID' 
        }, { 
          data: 'name',
          title: 'Name' 
        }, { 
          data: 'address',
          title: 'Address',
          mRender: function ( data, type, row ) {
            if (type === 'display') {
              return '<a (click)="onClick()">' + data.slice(0, 7) + "..." + data.slice(-8) + '</a>';
            }
            return data;
          }
        }, {
          data: null,
          defaultContent: '<i style="transform: scaleX(-1);" class="fas fa-reply"></i>',
          orderable: false,
        }
        
      ]
      */
      
      /*
      ajax: 'fake-data/contacts-datatable.json',
      columns: [{
        title: 'ID',
        data: 'id',
      }, {
        title: 'Name',
        data: 'name'
      }, {
        title: 'Address',
        data: 'address',
        responsive: true
      }, {
        data: null,
        defaultContent: "<button>Copy</button>",
        
      }]
      */
    };
    
  }
  
}

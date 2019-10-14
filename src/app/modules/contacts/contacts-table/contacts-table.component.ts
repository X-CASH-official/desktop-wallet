import { Component, OnInit } from '@angular/core';

import { FAKE_CONTACTS } from 'src/fake-data/fake-contacts';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {

  contactsTableOptions: any = {};
  
  fakeContacts: object = FAKE_CONTACTS;

  constructor() { }

  ngOnInit() {

    this.contactsTableOptions = {
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
          responsive: true,
        }, {
          data: null,
          defaultContent: '<button class="btn btn-icon btn-success" type="button" data-toggle="modal"><i style="transform: scaleX(-1);" class="fas fa-reply"></i></button>',
          orderable: false,
        }
    ]

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {

  contactsTableOptions: any = {};

  constructor() { }

  ngOnInit() {
    this.contactsTableOptions = {
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
    };
  }

}

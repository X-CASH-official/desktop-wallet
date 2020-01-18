import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @ViewChild('contactsTable', { static: true }) contactsTableChildComponent;

  constructor() { }

  ngOnInit() {
  }

  onNewContact(newContact: Event) {
    this.contactsTableChildComponent.onNewContact(newContact);
  }

}

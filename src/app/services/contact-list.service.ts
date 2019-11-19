import { Injectable } from '@angular/core';
import { ContactList, Contact } from '../models/contact-list.model';
import { BehaviorSubject } from 'rxjs';
import { FAKE_CONTACTS } from 'src/fake-data/fake-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  public contactList: ContactList;
  private contactList$: BehaviorSubject<Contact[]>;

  constructor() {
    this.contactList = new ContactList(FAKE_CONTACTS);
    this.contactList$ = new BehaviorSubject<Contact[]>(this.contactList.getContactList());
  }

  private update() {
    this.contactList$.next(this.contactList.getContactList());
  }

  public getContactList(): BehaviorSubject<Contact[]> {
    return this.contactList$;
  }

  public deleteContact(contactId: number): void {
    this.contactList.deleteContact(contactId);
    this.update();
  }

  public addContact(newName: string, newAddress: string): void {
    this.contactList.addContact(newName, newAddress);
    this.update();
  }

  public modifyContact(contactId: number, newName?: string, newAddress?: string): void {
    this.contactList.modifyContact(contactId, newName, newAddress);
    this.update();
  }
}

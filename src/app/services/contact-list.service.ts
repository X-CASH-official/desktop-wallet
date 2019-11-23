import { Injectable } from '@angular/core';
import { ContactList } from '../models/contact-list.model';
import { BehaviorSubject } from 'rxjs';
import { FAKE_CONTACTS } from 'src/fake-data/fake-contacts';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  public contactList: ContactList;
  private contactList$: BehaviorSubject<Contact[]>;

  constructor() {
    try {
      this.contactList = new ContactList(FAKE_CONTACTS);
      this.contactList$ = new BehaviorSubject<Contact[]>(this.contactList.getList());
    } catch (e) {
      console.error('Contact list initialization failed', e);
    }
  }

  private update() {
    this.contactList$.next(this.contactList.getList());
  }

  /**
   * Get the contact list.
   * @return a `BehaviorSubject<Contact[]>` of the contact list  
   */
  public getContactList(): BehaviorSubject<Contact[]> {
    return this.contactList$;
  }

  /**
   * Remove a contact from the list. Don't use this method outside of ActionsService.
   * @param contactId id of the contact to remove
   */
  public removeContact(contactId: number): void {
    this.contactList.removeElement(contactId);
    this.update();
  }

  /**
   * Add a contact to the list. Don't use this method outside of ActionsService.
   * @param name name of the contact to add
   * @param address address of the contact to add
   */
  public addContact(name: string, address: string): void {
    this.contactList.addContact(name, address);
    this.update();
  }

  /**
   * Modify a contact of the list. Don't use this method outside of ActionsService.
   * @param contactId id of the contact to modify
   * @param newName new name for the contact to modify
   * @param newAddress new address for the contact to modify
   */
  public modifyContact(contactId: number, newName?: string, newAddress?: string): void {
    this.contactList.modifyContact(contactId, newName, newAddress);
    this.update();
  }
}

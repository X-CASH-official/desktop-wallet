import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

import { FAKE_CONTACTS } from 'src/fake-data/fake-contacts';
import { ContactList } from 'src/app/models/contact-list.model';
import { Contact } from 'src/app/models/contact.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {

  constructor(private validatorRegexService: ValidatorsRegexService) { }

  /* modifyContact Modal */
  @ViewChild('modifyContactModal') modifyContactModal;
  modifyContactForm = new FormGroup({
    contactID: new FormControl(''),
    contactName: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.contact_name)]),
    contactPublicAddress: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.xcash_address)]),
  });
  get contactID() {
    return this.modifyContactForm.get('contactID');
  }
  get contactName() {
    return this.modifyContactForm.get('contactName');
  }
  get contactPublicAddress() {
    return this.modifyContactForm.get('contactPublicAddress');
  }

  /* Data table */
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  contacts: ContactList;
  dataSource;
  displayedColumns: string[] = ['id', 'name', 'address', 'actions'];

  ngOnInit() {  
    this.contacts = new ContactList(FAKE_CONTACTS);
    this.dataSource = new MatTableDataSource(this.contacts.contactList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  private refreshTable() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleAddrCopyTooltip(tooltip) {
    if (!tooltip.isOpen()) {
      tooltip.open();
      setTimeout(() => {
        tooltip.close();
      }, 2000);
    }
  }
  
  onModifyContactToggle(contact: Contact) {
    this.contactName.setValue(contact.name);
    this.contactPublicAddress.setValue(contact.address);
    this.contactID.setValue(contact.id);
    this.modifyContactModal.show();
  }
  
  onSubmitModification() {
    if (!this.modifyContactForm.invalid) {
      this.modifyContactModal.hide();
      this.contacts.modifyContact(this.modifyContactForm.value.contactID, this.modifyContactForm.value.contactName, this.modifyContactForm.value.contactPublicAddress);
      this.refreshTable();
      
      setTimeout(() => {
        this.modifyContactForm.reset();
      }, 300); // The time (animation) for the modal to disapear
    }
  }
  
  onNewContact(newContact: object) {
    this.contacts.add(newContact['contactName'], newContact['contactPublicAddress']);
    this.refreshTable();
  }
  
  onDeleteContact(contactID: number) {
    this.contacts.deleteContact(contactID);
    this.refreshTable();
  }
  
}

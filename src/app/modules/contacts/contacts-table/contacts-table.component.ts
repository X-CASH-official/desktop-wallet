import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ContactList } from 'src/app/models/contact-list.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ContactListService } from 'src/app/services/contact-list.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ActionsService } from 'src/app/services/actions.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {

  constructor(private validatorRegexService: ValidatorsRegexService, private contactListService : ContactListService, private actionsService: ActionsService, private DatabaseService: DatabaseService) { }

  /* modifyContact Modal */
  @ViewChild('modifyContactModal', { static: true }) modifyContactModal;
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
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  contactListSubscription: Subscription;
  dataSource: MatTableDataSource<Contact>;
  displayedColumns: string[] = ['id', 'name', 'address', 'actions'];

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Contact>();
    this.contactListSubscription = this.contactListService.getContactList().subscribe(contacts => {
      this.dataSource.data = contacts;
    });

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  ngOnDestroy() {
    this.contactListSubscription.unsubscribe();
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
  
  async onSubmitModification() {
    if (!this.modifyContactForm.invalid) {
      this.modifyContactModal.hide();      
      this.actionsService.modifyContact(this.modifyContactForm.value.contactID, this.modifyContactForm.value.contactName, this.modifyContactForm.value.contactPublicAddress);
      await this.DatabaseService.editContacts({"id":this.modifyContactForm.value.contactID,"name":this.modifyContactForm.value.contactName,"public_address":this.modifyContactForm.value.contactPublicAddress});
      this.refreshTable();
      
      setTimeout(() => {
        this.modifyContactForm.reset();
      }, 300); // The time (animation) for the modal to disapear
    }
  }
  
  async onNewContact(newContact: object) {
    this.actionsService.addContact(newContact['contactName'], newContact['contactPublicAddress']);
    await this.DatabaseService.addContacts({"name":newContact['contactName'],"public_address":newContact['contactPublicAddress']});
    this.refreshTable();
  }
  
  async onRemoveContact(contactID: number) {
    this.actionsService.removeContact(contactID);
    await this.DatabaseService.deleteContacts(contactID);
    this.refreshTable();
  }
  
}

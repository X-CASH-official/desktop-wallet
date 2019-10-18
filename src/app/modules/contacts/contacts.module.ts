import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule} from '../../theme/shared/shared.module';
import { NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

import { ContactsTableComponent } from './contacts-table/contacts-table.component';

import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms';
import { ContactsComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';

@NgModule({
  declarations: [ContactsTableComponent, ContactsComponent, ContactsHeaderComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    NgbTabsetModule,
    DataTablesModule,
    FormsModule,
    NgbTooltipModule,
    
  ]
})
export class ContactsModule { }

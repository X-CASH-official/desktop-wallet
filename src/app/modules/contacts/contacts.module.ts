import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule} from '../../theme/shared/shared.module';
import { NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';

import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ContactsListComponent, ContactsTableComponent],
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

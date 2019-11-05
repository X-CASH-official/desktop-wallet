import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule} from '../../theme/shared/shared.module';
import { NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

import { ContactsTableComponent } from './contacts-table/contacts-table.component';

import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms';
import { ContactsComponent } from './contacts.component';
import { AddContactModalComponent } from './contacts-header/add-contact-modal.component';
import { ClipboardModule } from 'ngx-clipboard';
import { MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { SharedPipesModule } from 'src/app/shared/shared-pipes/shared-pipes.module';

@NgModule({
  declarations: [ContactsTableComponent, ContactsComponent, AddContactModalComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    NgbTabsetModule,
    DataTablesModule,
    FormsModule,
    NgbTooltipModule,
    ClipboardModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    SharedPipesModule,
    
  ]
})
export class ContactsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule} from '../../theme/shared/shared.module';
import { NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

import { ContactsListComponent } from './contacts-list/contacts-list.component';

@NgModule({
  declarations: [ContactsListComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    SharedModule,
    NgbTabsetModule,
  ]
})
export class ContactsModule { }

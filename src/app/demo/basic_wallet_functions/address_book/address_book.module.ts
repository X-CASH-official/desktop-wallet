import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { address_bookRoutingModule } from './address_book-routing.module';
import { address_bookComponent } from './address_book.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    address_bookRoutingModule,
    SharedModule
  ],
  declarations: [address_bookComponent]
})
export class address_bookModule { }

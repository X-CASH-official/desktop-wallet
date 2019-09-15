import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { view_public_addressRoutingModule } from './view_public_address-routing.module';
import { view_public_addressComponent } from './view_public_address.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    view_public_addressRoutingModule,
    SharedModule
  ],
  declarations: [view_public_addressComponent]
})
export class view_public_addressModule { }

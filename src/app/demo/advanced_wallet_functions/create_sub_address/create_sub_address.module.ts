import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { create_sub_addressRoutingModule } from './create_sub_address-routing.module';
import { create_sub_addressComponent } from './create_sub_address.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    create_sub_addressRoutingModule,
    SharedModule
  ],
  declarations: [create_sub_addressComponent]
})
export class create_sub_addressModule { }

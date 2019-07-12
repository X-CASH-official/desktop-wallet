import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { create_integrated_addressRoutingModule } from './create_integrated_address-routing.module';
import { create_integrated_addressComponent } from './create_integrated_address.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    create_integrated_addressRoutingModule,
    SharedModule
  ],
  declarations: [create_integrated_addressComponent]
})
export class create_integrated_addressModule { }

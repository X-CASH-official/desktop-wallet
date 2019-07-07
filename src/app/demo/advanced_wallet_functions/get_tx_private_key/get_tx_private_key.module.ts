import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { get_tx_private_keyRoutingModule } from './get_tx_private_key-routing.module';
import { get_tx_private_keyComponent } from './get_tx_private_key.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    get_tx_private_keyRoutingModule,
    SharedModule
  ],
  declarations: [get_tx_private_keyComponent]
})
export class get_tx_private_keyModule { }

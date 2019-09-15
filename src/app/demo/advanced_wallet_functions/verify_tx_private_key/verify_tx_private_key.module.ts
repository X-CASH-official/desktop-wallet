import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { verify_tx_private_keyRoutingModule } from './verify_tx_private_key-routing.module';
import { verify_tx_private_keyComponent } from './verify_tx_private_key.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    verify_tx_private_keyRoutingModule,
    SharedModule
  ],
  declarations: [verify_tx_private_keyComponent]
})
export class verify_tx_private_keyModule { }

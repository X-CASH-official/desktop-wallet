import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { rescan_blockchainRoutingModule } from './rescan_blockchain-routing.module';
import { rescan_blockchainComponent } from './rescan_blockchain.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    rescan_blockchainRoutingModule,
    SharedModule
  ],
  declarations: [rescan_blockchainComponent]
})
export class rescan_blockchainModule { }

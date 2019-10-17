import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletAdvancedRoutingModule } from './wallet-advanced-routing.module';

import { change_passwordComponent } from './change_password/change_password.component';
import { create_integrated_addressComponent } from './create_integrated_address/create_integrated_address.component';
import { create_reserve_proofComponent } from './create_reserve_proof/create_reserve_proof.component';
import { create_sub_addressComponent } from './create_sub_address/create_sub_address.component';
import { get_tx_private_keyComponent } from './get_tx_private_key/get_tx_private_key.component';
import { rescan_blockchainComponent } from './rescan_blockchain/rescan_blockchain.component';
import { sign_dataComponent } from './sign_data/sign_data.component';
import { verify_dataComponent } from './verify_data/verify_data.component';
import { verify_reserve_proofComponent } from './verify_reserve_proof/verify_reserve_proof.component';
import { verify_tx_private_keyComponent } from './verify_tx_private_key/verify_tx_private_key.component';
import { WalletAdvancedComponent } from './wallet-advanced.component';

import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbProgressbarModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [change_passwordComponent, 
                create_integrated_addressComponent, 
                create_reserve_proofComponent,
                create_sub_addressComponent,
                get_tx_private_keyComponent,
                rescan_blockchainComponent,
                sign_dataComponent,
                verify_dataComponent,
                verify_reserve_proofComponent,
                verify_tx_private_keyComponent,
                WalletAdvancedComponent,
                ],
  imports: [
    CommonModule,
    WalletAdvancedRoutingModule,
    SharedModule,
    NgbProgressbarModule,
    NgbTabsetModule,
  ]
})
export class WalletAdvancedModule { }

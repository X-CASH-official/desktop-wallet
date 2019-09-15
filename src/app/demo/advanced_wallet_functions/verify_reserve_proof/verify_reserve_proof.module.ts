import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { verify_reserve_proofRoutingModule } from './verify_reserve_proof-routing.module';
import { verify_reserve_proofComponent } from './verify_reserve_proof.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    verify_reserve_proofRoutingModule,
    SharedModule
  ],
  declarations: [verify_reserve_proofComponent]
})
export class verify_reserve_proofModule { }

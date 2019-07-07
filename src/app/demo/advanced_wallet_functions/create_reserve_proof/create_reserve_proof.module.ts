import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { create_reserve_proofRoutingModule } from './create_reserve_proof-routing.module';
import { create_reserve_proofComponent } from './create_reserve_proof.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    create_reserve_proofRoutingModule,
    SharedModule
  ],
  declarations: [create_reserve_proofComponent]
})
export class create_reserve_proofModule { }

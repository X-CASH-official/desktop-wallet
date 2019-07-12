import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvModalRoutingModule } from './adv-modal-routing.module';
import { AdvModalComponent } from './adv-modal.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdvModalRoutingModule,
    SharedModule
  ],
  declarations: [AdvModalComponent]
})
export class AdvModalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { sendRoutingModule } from './send-routing.module';
import { sendComponent } from './send.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    sendRoutingModule,
    SharedModule
  ],
  declarations: [sendComponent]
})
export class sendModule { }

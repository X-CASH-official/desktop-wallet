import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { verify_dataRoutingModule } from './verify_data-routing.module';
import { verify_dataComponent } from './verify_data.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    verify_dataRoutingModule,
    SharedModule
  ],
  declarations: [verify_dataComponent]
})
export class verify_dataModule { }

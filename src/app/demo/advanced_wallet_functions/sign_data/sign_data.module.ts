import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { sign_dataRoutingModule } from './sign_data-routing.module';
import { sign_dataComponent } from './sign_data.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    sign_dataRoutingModule,
    SharedModule
  ],
  declarations: [sign_dataComponent]
})
export class sign_dataModule { }

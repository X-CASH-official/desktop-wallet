import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { change_passwordRoutingModule } from './change_password-routing.module';
import { change_passwordComponent } from './change_password.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    change_passwordRoutingModule,
    SharedModule
  ],
  declarations: [change_passwordComponent]
})
export class change_passwordModule { }

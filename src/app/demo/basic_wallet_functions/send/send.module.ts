import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { sendRoutingModule } from './send-routing.module';
import { sendComponent } from './send.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomFormsModule} from 'ng2-validation';


@NgModule({
  imports: [
    CommonModule,
    sendRoutingModule,
    SharedModule,
    NgbDropdownModule,
    CustomFormsModule
  ],
  declarations: [sendComponent]
})
export class sendModule { }

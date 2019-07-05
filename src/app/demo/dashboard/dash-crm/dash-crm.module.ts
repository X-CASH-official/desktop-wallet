import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashCrmRoutingModule } from './dash-crm-routing.module';
import { DashCrmComponent } from './dash-crm.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DashCrmRoutingModule,
    SharedModule,
    NgbTabsetModule
  ],
  declarations: [DashCrmComponent]
})
export class DashCrmModule { }

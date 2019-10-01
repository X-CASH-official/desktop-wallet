import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { dashboardRoutingModule } from './dashboard-routing.module';
import { dashboardComponent } from './dashboard.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    dashboardRoutingModule,
    SharedModule,
    NgbProgressbarModule
  ],
  declarations: [dashboardComponent]
})
export class dashboardModule { }

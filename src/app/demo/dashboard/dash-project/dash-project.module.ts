import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashProjectRoutingModule } from './dash-project-routing.module';
import { DashProjectComponent } from './dash-project.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DashProjectRoutingModule,
    SharedModule,
    NgbTabsetModule
  ],
  declarations: [DashProjectComponent]
})
export class DashProjectModule { }

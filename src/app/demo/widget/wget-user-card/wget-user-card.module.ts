import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WgetUserCardRoutingModule } from './wget-user-card-routing.module';
import { WgetUserCardComponent } from './wget-user-card.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    WgetUserCardRoutingModule,
    SharedModule
  ],
  declarations: [WgetUserCardComponent]
})
export class WgetUserCardModule { }

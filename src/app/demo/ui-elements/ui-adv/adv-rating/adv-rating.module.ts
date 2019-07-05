import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvRatingRoutingModule } from './adv-rating-routing.module';
import { AdvRatingComponent } from './adv-rating.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {BarRatingModule} from 'ngx-bar-rating';

@NgModule({
  imports: [
    CommonModule,
    AdvRatingRoutingModule,
    SharedModule,
    BarRatingModule
  ],
  declarations: [AdvRatingComponent]
})
export class AdvRatingModule { }

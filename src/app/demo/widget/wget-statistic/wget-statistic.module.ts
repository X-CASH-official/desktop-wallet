import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WgetStatisticRoutingModule } from './wget-statistic-routing.module';
import { WgetStatisticComponent } from './wget-statistic.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    WgetStatisticRoutingModule,
    SharedModule,
    NgbCarouselModule
  ],
  declarations: [WgetStatisticComponent]
})
export class WgetStatisticModule { }

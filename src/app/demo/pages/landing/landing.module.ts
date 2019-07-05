import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    NgbCarouselModule,
    ScrollToModule.forRoot()
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }

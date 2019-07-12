import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribeRoutingModule } from './subscribe-routing.module';
import { SubscribeComponent } from './subscribe.component';

@NgModule({
  imports: [
    CommonModule,
    SubscribeRoutingModule
  ],
  declarations: [SubscribeComponent]
})
export class SubscribeModule { }

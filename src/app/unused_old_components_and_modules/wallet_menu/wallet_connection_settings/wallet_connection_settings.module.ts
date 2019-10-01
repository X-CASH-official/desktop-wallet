import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { wallet_connection_settingsRoutingModule } from './wallet_connection_settings-routing.module';
import { wallet_connection_settingsComponent } from './wallet_connection_settings.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    wallet_connection_settingsRoutingModule,
    SharedModule,
    NgbCarouselModule
  ],
  declarations: [wallet_connection_settingsComponent]
})
export class wallet_connection_settingsModule { }

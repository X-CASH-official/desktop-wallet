import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../theme/shared/shared.module';
import {NgbProgressbarModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import { WalletHomepageComponent } from './wallet-homepage.component';

import { WalletHomeRoutingModule } from './wallet-homepage-routing.module';

@NgModule({
  declarations: [WalletHomepageComponent],
  imports: [
    CommonModule,
    WalletHomeRoutingModule,
    SharedModule,
    NgbProgressbarModule,
    NgbDropdownModule,
  ]
})
export class WalletHomepageModule { }

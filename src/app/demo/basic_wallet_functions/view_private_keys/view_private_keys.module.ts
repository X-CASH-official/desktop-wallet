import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { view_private_keysRoutingModule } from './view_private_keys-routing.module';
import { view_private_keysComponent } from './view_private_keys.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    view_private_keysRoutingModule,
    SharedModule
  ],
  declarations: [view_private_keysComponent]
})
export class view_private_keysModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrtPeityRoutingModule } from './crt-peity-routing.module';
import { CrtPeityComponent } from './crt-peity.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CrtPeityRoutingModule,
    SharedModule
  ],
  declarations: [CrtPeityComponent]
})
export class CrtPeityModule { }

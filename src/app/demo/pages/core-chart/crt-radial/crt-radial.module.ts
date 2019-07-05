import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrtRadialRoutingModule } from './crt-radial-routing.module';
import { CrtRadialComponent } from './crt-radial.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CrtRadialRoutingModule,
    SharedModule
  ],
  declarations: [CrtRadialComponent]
})
export class CrtRadialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOtherRoutingModule } from './basic-other-routing.module';
import { BasicOtherComponent } from './basic-other.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BasicOtherRoutingModule,
    SharedModule
  ],
  declarations: [BasicOtherComponent]
})
export class BasicOtherModule { }

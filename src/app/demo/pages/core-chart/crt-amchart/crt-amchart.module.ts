import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrtAmchartRoutingModule } from './crt-amchart-routing.module';
import { CrtAmchartComponent } from './crt-amchart.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CrtAmchartRoutingModule,
    SharedModule
  ],
  declarations: [CrtAmchartComponent]
})
export class CrtAmchartModule { }

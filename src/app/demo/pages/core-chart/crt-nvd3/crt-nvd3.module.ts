import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrtNvd3RoutingModule } from './crt-nvd3-routing.module';
import { CrtNvd3Component } from './crt-nvd3.component';
import {NvD3Module} from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CrtNvd3RoutingModule,
    SharedModule,
    NvD3Module
  ],
  declarations: [CrtNvd3Component]
})
export class CrtNvd3Module { }

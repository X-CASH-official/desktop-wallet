import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmAdvanceRoutingModule } from './frm-advance-routing.module';
import { FrmAdvanceComponent } from './frm-advance.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {TagInputModule} from 'ngx-chips';

@NgModule({
  imports: [
    CommonModule,
    FrmAdvanceRoutingModule,
    SharedModule,
    TagInputModule
  ],
  declarations: [FrmAdvanceComponent]
})
export class FrmAdvanceModule { }

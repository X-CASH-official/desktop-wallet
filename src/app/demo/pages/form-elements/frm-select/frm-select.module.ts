import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrmSelectRoutingModule } from './frm-select-routing.module';
import { FrmSelectComponent } from './frm-select.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {AngularDualListBoxModule} from 'angular-dual-listbox';
import {TagInputModule} from 'ngx-chips';
import {SelectModule} from 'ng-select';
import {SelectOptionService} from '../../../../theme/shared/components/select/select-option.service';

@NgModule({
  imports: [
    CommonModule,
    FrmSelectRoutingModule,
    SharedModule,
    AngularDualListBoxModule,
    TagInputModule,
    SelectModule
  ],
  declarations: [FrmSelectComponent],
  providers: [SelectOptionService]
})
export class FrmSelectModule { }

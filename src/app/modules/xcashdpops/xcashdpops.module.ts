import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XcashdpopsRoutingModule } from './xcashdpops-routing.module';
import { SharedModule} from '../../theme/shared/shared.module';
import { NgbTabsetModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';

import {DataTablesModule} from 'angular-datatables';
import {FormsModule} from '@angular/forms';
import { XcashdpopsComponent } from './xcashdpops.component';
import { VoteComponent } from './vote/vote-modal.component';
import { RegisterComponent } from './register/register-modal.component';
import { UpdateComponent } from './update/update-modal.component';
import { RecoverComponent } from './recover/recover-modal.component';
import { ClipboardModule } from 'ngx-clipboard';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { SharedPipesModule } from 'src/app/shared/shared-pipes/shared-pipes.module';

@NgModule({
  declarations: [XcashdpopsComponent, VoteComponent, RegisterComponent, UpdateComponent, RecoverComponent],
  imports: [
    CommonModule,
    XcashdpopsRoutingModule,
    SharedModule,
    NgbTabsetModule,
    DataTablesModule,
    FormsModule,
    NgbTooltipModule,
    ClipboardModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    SharedPipesModule,
    
  ]
})
export class XcashdpopsModule { }

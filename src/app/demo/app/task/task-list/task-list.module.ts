import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DataTableModule} from 'angular-6-datatable';
import {HttpClientModule} from '@angular/common/http';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TaskListRoutingModule,
    SharedModule,
    DataTableModule,
    HttpClientModule,
    NgbDropdownModule
  ],
  declarations: [TaskListComponent]
})
export class TaskListModule { }

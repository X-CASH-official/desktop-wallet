import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import {TodoListComponent} from './todo-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TodoListRoutingModule,
    SharedModule
  ],
  declarations: [TodoListComponent]
})
export class TodoListModule { }

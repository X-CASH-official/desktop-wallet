import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvTaskBoardRoutingModule } from './adv-task-board-routing.module';
import { AdvTaskBoardComponent } from './adv-task-board.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {DragulaModule} from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    AdvTaskBoardRoutingModule,
    SharedModule,
    DragulaModule
  ],
  declarations: [AdvTaskBoardComponent]
})
export class AdvTaskBoardModule { }

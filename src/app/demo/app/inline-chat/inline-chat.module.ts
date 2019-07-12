import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineChatRoutingModule } from './inline-chat-routing.module';
import { InlineChatComponent } from './inline-chat.component';
import {SharedModule} from '../../../theme/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InlineChatRoutingModule,
    SharedModule
  ],
  declarations: [InlineChatComponent]
})
export class InlineChatModule { }

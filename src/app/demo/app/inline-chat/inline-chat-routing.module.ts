import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InlineChatComponent} from './inline-chat.component';

const routes: Routes = [
  {
    path: '',
    component: InlineChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InlineChatRoutingModule { }

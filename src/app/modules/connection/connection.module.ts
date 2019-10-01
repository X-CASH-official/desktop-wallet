import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionRoutingModule } from './connection-routing.module';
import { ConnectionComponent } from './connection.component';

@NgModule({
  declarations: [ConnectionComponent],
  imports: [
    CommonModule,
    ConnectionRoutingModule
  ]
})
export class ConnectionModule { }

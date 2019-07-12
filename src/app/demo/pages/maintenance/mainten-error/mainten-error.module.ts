import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenErrorRoutingModule } from './mainten-error-routing.module';
import { MaintenErrorComponent } from './mainten-error.component';

@NgModule({
  imports: [
    CommonModule,
    MaintenErrorRoutingModule
  ],
  declarations: [MaintenErrorComponent]
})
export class MaintenErrorModule { }

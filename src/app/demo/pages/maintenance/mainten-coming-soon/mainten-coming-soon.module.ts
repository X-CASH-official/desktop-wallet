import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenComingSoonRoutingModule } from './mainten-coming-soon-routing.module';
import { MaintenComingSoonComponent } from './mainten-coming-soon.component';

@NgModule({
  imports: [
    CommonModule,
    MaintenComingSoonRoutingModule
  ],
  declarations: [MaintenComingSoonComponent]
})
export class MaintenComingSoonModule { }

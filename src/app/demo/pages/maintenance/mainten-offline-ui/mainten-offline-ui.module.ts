import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenOfflineUiRoutingModule } from './mainten-offline-ui-routing.module';
import { MaintenOfflineUiComponent } from './mainten-offline-ui.component';

@NgModule({
  imports: [
    CommonModule,
    MaintenOfflineUiRoutingModule
  ],
  declarations: [MaintenOfflineUiComponent]
})
export class MaintenOfflineUiModule { }

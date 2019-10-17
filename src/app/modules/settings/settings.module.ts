import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingsGeneralComponent } from './settings-general/settings-general.component';
import { SettingsConnectionComponent } from './settings-connection/settings-connection.component';
import { SettingsAboutComponent } from './settings-about/settings-about.component';

@NgModule({
  declarations: [
    SettingsComponent, 
    SettingsGeneralComponent, 
    SettingsConnectionComponent, 
    SettingsAboutComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }

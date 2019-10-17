import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsGeneralComponent } from './settings-general/settings-general.component';
import { SettingsAboutComponent } from './settings-about/settings-about.component';
import { SettingsConnectionComponent } from './settings-connection/settings-connection.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'general',
        component: SettingsGeneralComponent
      },
      {
        path: 'connection',
        component: SettingsConnectionComponent
      },
      {
        path: 'about',
        component: SettingsAboutComponent
      },
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full',
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

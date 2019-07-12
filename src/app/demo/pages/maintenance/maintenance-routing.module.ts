import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'offline-ui',
        loadChildren: './mainten-offline-ui/mainten-offline-ui.module#MaintenOfflineUiModule'
      },
      {
        path: 'coming-soon',
        loadChildren: './mainten-coming-soon/mainten-coming-soon.module#MaintenComingSoonModule'
      },
      {
        path: 'error',
        loadChildren: './mainten-error/mainten-error.module#MaintenErrorModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }

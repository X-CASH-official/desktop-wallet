import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './demo/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'layout',
        loadChildren: './demo/layout/layout.module#LayoutModule'
      },
      {
        path: 'widget',
        loadChildren: './demo/widget/widget.module#WidgetModule'
      },
      {
        path: 'basic',
        loadChildren: './demo/ui-elements/ui-basic/ui-basic.module#UiBasicModule'
      },
      {
        path: 'advance',
        loadChildren: './demo/ui-elements/ui-adv/ui-adv.module#UiAdvModule'
      },
      {
        path: 'forms',
        loadChildren: './demo/pages/form-elements/form-elements.module#FormElementsModule'
      },
      {
        path: 'tables',
        loadChildren: './demo/pages/tables/tables.module#TablesModule'
      },
      {
        path: 'charts',
        loadChildren: './demo/pages/core-chart/core-chart.module#CoreChartModule'
      },
      {
        path: 'maps',
        loadChildren: './demo/pages/core-maps/core-maps.module#CoreMapsModule'
      },
      {
        path: 'message',
        loadChildren: './demo/app/inline-chat/inline-chat.module#InlineChatModule'
      },
      {
        path: 'task',
        loadChildren: './demo/app/task/task.module#TaskModule'
      },
      {
        path: 'todo',
        loadChildren: './demo/app/todo/todo.module#TodoModule'
      },
      {
        path: 'gallery',
        loadChildren: './demo/app/gallery/gallery.module#GalleryModule'
      },
      {
        path: 'editor',
        loadChildren: './demo/extension/editor/editor.module#EditorModule'
      },
      {
        path: 'invoice',
        loadChildren: './demo/extension/invoice/invoice.module#InvoiceModule'
      },
      {
        path: 'full-calendar',
        loadChildren: './demo/extension/full-event-calendar/full-event-calendar.module#FullEventCalendarModule'
      },
      {
        path: 'file-upload',
        loadChildren: './demo/extension/files-upload/files-upload.module#FilesUploadModule'
      },
      {
        path: 'sample-page',
        loadChildren: './demo/extra/sample-page/sample-page.module#SamplePageModule'
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'maintenance',
        loadChildren: './demo/pages/maintenance/maintenance.module#MaintenanceModule'
      },
      {
        path: 'auth',
        loadChildren: './demo/pages/authentication/authentication.module#AuthenticationModule'
      },
      {
        path: 'landing',
        loadChildren: './demo/pages/landing/landing.module#LandingModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

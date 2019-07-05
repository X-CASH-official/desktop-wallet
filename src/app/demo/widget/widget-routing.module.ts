import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'statistic',
        loadChildren: './wget-statistic/wget-statistic.module#WgetStatisticModule'
      },
      {
        path: 'data',
        loadChildren: './wget-data/wget-data.module#WgetDataModule'
      },
      {
        path: 'table',
        loadChildren: './wget-table/wget-table.module#WgetTableModule'
      },
      {
        path: 'user',
        loadChildren: './wget-user-card/wget-user-card.module#WgetUserCardModule'
      },
      {
        path: 'chart',
        loadChildren: './wget-charts/wget-charts.module#WgetChartsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetRoutingModule { }

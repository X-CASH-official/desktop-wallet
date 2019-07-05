import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'amchart',
        loadChildren: './crt-amchart/crt-amchart.module#CrtAmchartModule'
      },
      {
        path: 'chart-js',
        loadChildren: './crt-chart-js/crt-chart-js.module#CrtChartJsModule'
      },
      {
        path: 'e-chart',
        loadChildren: './crt-echart/crt-echart.module#CrtEchartModule'
      },
      {
        path: 'google',
        loadChildren: './crt-google-chart/crt-google-chart.module#CrtGoogleChartModule'
      },
      {
        path: 'high-chart',
        loadChildren: './crt-high-chart/crt-high-chart.module#CrtHighChartModule'
      },
      {
        path: 'morris',
        loadChildren: './crt-morris/crt-morris.module#CrtMorrisModule'
      },
      {
        path: 'nvd3',
        loadChildren: './crt-nvd3/crt-nvd3.module#CrtNvd3Module'
      },
      {
        path: 'peity',
        loadChildren: './crt-peity/crt-peity.module#CrtPeityModule'
      },
      {
        path: 'radial',
        loadChildren: './crt-radial/crt-radial.module#CrtRadialModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreChartRoutingModule { }

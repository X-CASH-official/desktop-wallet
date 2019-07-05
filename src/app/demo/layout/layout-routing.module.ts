import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'static',
        loadChildren: './theme-static/theme-static.module#ThemeStaticModule'
      },
      {
        path: 'fixed',
        loadChildren: './theme-fixed/theme-fixed.module#ThemeFixedModule'
      },
      {
        path: 'nav-fixed',
        loadChildren: './theme-nav-fixed/theme-nav-fixed.module#ThemeNavFixedModule'
      },
      {
        path: 'nav-image',
        loadChildren: './theme-nav-image/theme-nav-image.module#ThemeNavImageModule'
      },
      {
        path: 'collapse-menu',
        loadChildren: './theme-collapse-menu/theme-collapse-menu.module#ThemeCollapseMenuModule'
      },
      {
        path: 'horizontal',
        loadChildren: './theme-horizontal/theme-horizontal.module#ThemeHorizontalModule'
      },
      {
        path: 'box',
        loadChildren: './theme-box/theme-box.module#ThemeBoxModule'
      },
      {
        path: 'rtl',
        loadChildren: './theme-rtl/theme-rtl.module#ThemeRtlModule'
      },
      {
        path: 'light',
        loadChildren: './theme-light/theme-light.module#ThemeLightModule'
      },
      {
        path: 'dark',
        loadChildren: './theme-dark/theme-dark.module#ThemeDarkModule'
      },
      {
        path: 'icon-color',
        loadChildren: './theme-icon-color/theme-icon-color.module#ThemeIconColorModule'
      },
      {
        path: 'layout-2',
        loadChildren: './theme-layout2/theme-layout2.module#ThemeLayout2Module'
      },
      {
        path: 'layout-2-2',
        loadChildren: './theme-layout22/theme-layout22.module#ThemeLayout22Module'
      },
      {
        path: 'layout-3',
        loadChildren: './theme-layout3/theme-layout3.module#ThemeLayout3Module'
      },
      {
        path: 'layout-4',
        loadChildren: './theme-layout4/theme-layout4.module#ThemeLayout4Module'
      },
      {
        path: 'layout-4-2',
        loadChildren: './theme-layout44/theme-layout44.module#ThemeLayout44Module'
      },
      {
        path: 'layout-5h',
        loadChildren: './theme-layout5h/theme-layout5h.module#ThemeLayout5hModule'
      },
      {
        path: 'nav-color',
        loadChildren: './theme-layout5v/theme-layout5v.module#ThemeLayout5vModule'
      },
      {
        path: 'layout-6',
        loadChildren: './theme-layout6/theme-layout6.module#ThemeLayout6Module'
      },
      {
        path: 'layout-8',
        loadChildren: './theme-layout8/theme-layout8.module#ThemeLayout8Module'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

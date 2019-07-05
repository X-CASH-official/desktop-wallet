import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alert',
        loadChildren: './basic-alert/basic-alert.module#BasicAlertModule'
      },
      {
        path: 'button',
        loadChildren: './basic-button/basic-button.module#BasicButtonModule'
      },
      {
        path: 'badges',
        loadChildren: './basic-badge/basic-badge.module#BasicBadgeModule'
      },
      {
        path: 'breadcrumb-paging',
        loadChildren: './breadcrumb-paging/breadcrumb-paging.module#BreadcrumbPagingModule'
      },
      {
        path: 'cards',
        loadChildren: './basic-cards/basic-cards.module#BasicCardsModule'
      },
      {
        path: 'collapse',
        loadChildren: './basic-collapse/basic-collapse.module#BasicCollapseModule'
      },
      {
        path: 'carousel',
        loadChildren: './basic-carousel/basic-carousel.module#BasicCarouselModule'
      },
      {
        path: 'grid-system',
        loadChildren: './basic-grid/basic-grid.module#BasicGridModule'
      },
      {
        path: 'progress',
        loadChildren: './basic-progress-bar/basic-progress-bar.module#BasicProgressBarModule'
      },
      {
        path: 'modal',
        loadChildren: './basic-modal/basic-modal.module#BasicModalModule'
      },
      {
        path: 'tabs-pills',
        loadChildren: './basic-tabs-pills/basic-tabs-pills.module#BasicTabsPillsModule'
      },
      {
        path: 'typography',
        loadChildren: './basic-typography/basic-typography.module#BasicTypographyModule'
      },
      {
        path: 'tooltip-popovers',
        loadChildren: './basic-tooltip-popovers/basic-tooltip-popovers.module#BasicTooltipPopoversModule'
      },
      {
        path: 'other',
        loadChildren: './basic-other/basic-other.module#BasicOtherModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule { }

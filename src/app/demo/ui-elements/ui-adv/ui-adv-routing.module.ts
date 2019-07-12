import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alert',
        loadChildren: './adv-alert/adv-alert.module#AdvAlertModule'
      },
      {
        path: 'datepicker',
        loadChildren: './adv-datepicker/adv-datepicker.module#AdvDatepickerModule'
      },
      {
        path: 'task-board',
        loadChildren: './adv-task-board/adv-task-board.module#AdvTaskBoardModule'
      },
      {
        path: 'light-box',
        loadChildren: './adv-light-box/adv-light-box.module#AdvLightBoxModule'
      },
      {
        path: 'modal',
        loadChildren: './adv-modal/adv-modal.module#AdvModalModule'
      },
      {
        path: 'notification',
        loadChildren: './adv-notification/adv-notification.module#AdvNotificationModule'
      },
      {
        path: 'rating',
        loadChildren: './adv-rating/adv-rating.module#AdvRatingModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiAdvRoutingModule { }

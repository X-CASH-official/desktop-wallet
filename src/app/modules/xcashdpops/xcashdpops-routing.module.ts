import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XcashdpopsComponent } from './xcashdpops.component';

const routes: Routes = [
  {
    path: '',
    component: XcashdpopsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XcashdpopsRoutingModule { }

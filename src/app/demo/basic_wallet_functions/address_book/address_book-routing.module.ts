import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {address_bookComponent} from './address_book.component';

const routes: Routes = [
  {
    path: '',
    component: address_bookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class address_bookRoutingModule { }

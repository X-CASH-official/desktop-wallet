import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bootstrap',
        loadChildren: './tbl-bootstrap/tbl-bootstrap.module#TblBootstrapModule'
      },
      {
        path: 'datatable',
        loadChildren: './tbl-datatable/tbl-datatable.module#TblDatatableModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }

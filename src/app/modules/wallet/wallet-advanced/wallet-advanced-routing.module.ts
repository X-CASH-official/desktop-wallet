import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletAdvancedComponent } from './wallet-advanced.component';

const routes: Routes = [
  {
    path: '',
    component: WalletAdvancedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletAdvancedRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteWalletModalComponent } from './delete-wallet-modal/delete-wallet-modal.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [
    DeleteWalletModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports : [
    DeleteWalletModalComponent
  ]
})
export class SharedWalletModalModule { }

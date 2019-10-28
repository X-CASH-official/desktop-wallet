import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteWalletModalComponent } from './delete-wallet-modal/delete-wallet-modal.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RenameWalletModalComponent } from './rename-wallet-modal/rename-wallet-modal.component';

@NgModule({
  declarations: [
    DeleteWalletModalComponent,
    RenameWalletModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports : [
    DeleteWalletModalComponent,
    RenameWalletModalComponent
  ]
})
export class SharedWalletModalModule { }

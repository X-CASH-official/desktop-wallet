import { Component, OnInit, ViewChild } from '@angular/core';
import { WalletListService } from 'src/app/services/wallet-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { ActionsService } from 'src/app/services/actions.service';

@Component({
  selector: 'app-rename-wallet-modal',
  templateUrl: './rename-wallet-modal.component.html',
  styleUrls: ['./rename-wallet-modal.component.scss']
})
export class RenameWalletModalComponent implements OnInit {
  @ViewChild('renameWalletModal', { static: true }) renameWalletModal: UiModalComponent;

  constructor(private actionsService: ActionsService, private validatorRegexService: ValidatorsRegexService) { }

  renameWalletForm = new FormGroup({
    newName: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.text_settings)])
  });
  get newName() {
    return this.renameWalletForm.get('newName');
  }

  walletIdToRename: number;

  ngOnInit() {
  }

  show(walletIdToRename: number) {
    this.walletIdToRename = walletIdToRename;
    this.renameWalletForm.reset();
    this.renameWalletModal.show();
  }

  onSubmitRenameWalletForm() {
    if (this.renameWalletForm.valid) {
      this.actionsService.renameWallet(this.walletIdToRename, this.newName.value);
      this.renameWalletModal.hide();
    } else {
      this.newName.markAsTouched();
    }
  }

}

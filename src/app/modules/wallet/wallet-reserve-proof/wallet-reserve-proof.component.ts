import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';

@Component({
  selector: 'app-wallet-reserve-proof',
  templateUrl: './wallet-reserve-proof.component.html',
  styleUrls: ['./wallet-reserve-proof.component.scss']
})
export class WalletReserveProofComponent implements OnInit {

  constructor(private validatorRegexService: ValidatorsRegexService) { }

  /* Create reserve proof */
  @ViewChild('createReserveProofModal1', { static: true }) createReserveProofModal1: UiModalComponent;
  @ViewChild('createReserveProofModal2', { static: true }) createReserveProofModal2: UiModalComponent;

  createReserveProofForm = new FormGroup({
    amountToProve: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.xcash_reserve_proof_amount)]), // could add the max amount of this wallet
    messageToProve: new FormControl('', [Validators.pattern(this.validatorRegexService.text_settings)])
  });
  get amountToProve() {
    return this.createReserveProofForm.get('amountToProve');
  }
  get messageToProve() {
    return this.createReserveProofForm.get('messageToProve');
  }

  onSubmitCreateReserveProof() {
    if (this.createReserveProofForm.valid) {
      console.log(this.createReserveProofForm);
      this.createdReserveSignature = "SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz"
      this.createReserveProofModal1
      
    } else {
      this.amountToProve.markAsTouched();
    }
    console.log(this.createReserveProofForm);
  }

  createdReserveSignature: string;

  /* Verify reserve proof modal */
  @ViewChild('verifyReserveProofModal', { static: true }) verifySignedDataModal: UiModalComponent;

  verifyReserveProofForm = new FormGroup({
    addressToVerify: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.xcash_address)]),
    messageToVerify: new FormControl('', [Validators.pattern(this.validatorRegexService.text_settings)]),
    signatureToVerify: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.signature)])
  });
  get addressToVerify() {
    return this.verifyReserveProofForm.get('addressToVerify');
  }
  get messageToVerify() {
    return this.verifyReserveProofForm.get('messageToVerify');
  }
  get signatureToVerify() {
    return this.verifyReserveProofForm.get('signatureToVerify');
  }

  verifyReserveProofIsSubmitted: boolean = false;
  verificationSuccess: boolean = false;

  onSubmitReserveProof() {
    console.log(this.verifyReserveProofForm);
    if (this.verifyReserveProofForm.valid) {
      this.verifyReserveProofIsSubmitted = true;
      // TODO: process of reserve proof verification
      this.verificationSuccess = true;
    } else {
      this.addressToVerify.markAsTouched();
      this.messageToVerify.markAsTouched();
      this.signatureToVerify.markAsTouched();
    }
  }

  onCloseReserveProofVerification() {
    this.verifySignedDataModal.hide();
    setTimeout(() => {
      this.verifyReserveProofIsSubmitted = false;
      this.verificationSuccess = false;
      this.verifyReserveProofForm.reset();
    }, 300); // Animation of modal hide time
  }

  /* Signed data table */
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  dataSource = new MatTableDataSource(FAKE_RESERVE_PROOF);
  displayedColumns: string[] = ['id', 'amount', 'signature', 'status', 'actions'];
  
  ngOnInit() {  
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleCopyTooltip(tooltip) {
    if (!tooltip.isOpen()) {
      tooltip.open();
      setTimeout(() => {
        tooltip.close();
      }, 2000);
    }
  }

}

export interface ReserveProof {
  id: number;
  amount: number;
  signature: string;
  status: string;
}

const FAKE_RESERVE_PROOF: ReserveProof[] = [
  {
    id: 1,
    amount: 1000000,
    signature: 'SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz',
    status: 'valid',
  },
  {
    id: 2,
    amount: 1000000,
    signature: 'SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz',
    status: 'valid',
  },
  {
    id: 3,
    amount: 1000000,
    signature: 'SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz',
    status: 'valid',
  },
  {
    id: 4,
    amount: 1000000,
    signature: 'SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz',
    status: 'valid',
  },
  {
    id: 5,
    amount: 1000000,
    signature: 'SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz',
    status: 'valid',
  },
]
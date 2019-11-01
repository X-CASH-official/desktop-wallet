import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';

@Component({
  selector: 'app-wallet-sign-data',
  templateUrl: './wallet-sign-data.component.html',
  styleUrls: ['./wallet-sign-data.component.scss']
})
export class WalletSignDataComponent implements OnInit {

  constructor(private validatorRegexService: ValidatorsRegexService) { }

  /* Sign data modal */
  @ViewChild('signDataModal1') signDataModal1: UiModalComponent;
  @ViewChild('signDataModal2') signDataModal2: UiModalComponent;

  dataToSignForm = new FormGroup({
    dataToSign: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.data_to_sign)]),
  });
  get dataToSign() {
    return this.dataToSignForm.get('dataToSign');
  }

  onSubmitDataToSign() {
    if (this.dataToSignForm.valid) {
      console.log(this.dataToSignForm);
      // fake creation
      this.signDataModal1.hide();
      this.signDataModal2.show();
    } else {
      this.dataToSign.markAsTouched();
    }
  }

  createdSignature: string = "SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz";


  /* Verify signed data modal */
  @ViewChild('verifySignedDataModal') verifySignedDataModal: UiModalComponent;

  verifySignedDataForm = new FormGroup({
    dataToVerify: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.data_to_sign)]),
    signatoryAddress: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.xcash_address)]),
    signatureToVerify: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.signature)])
  });
  get dataToVerify() {
    return this.verifySignedDataForm.get('dataToVerify');
  }
  get signatoryAddress() {
    return this.verifySignedDataForm.get('signatoryAddress');
  }
  get signatureToVerify() {
    return this.verifySignedDataForm.get('signatureToVerify');
  }

  verifySignedDataIsSubmitted: boolean = false;
  verificationSuccess: boolean = false;

  onSubmitVerifySignedData() {
    console.log(this.verifySignedDataForm);
    if (this.verifySignedDataForm.valid) {
      this.verifySignedDataIsSubmitted = true;
      // TODO: process of signature verification
      this.verificationSuccess = true;
    } else {
      this.dataToVerify.markAsTouched();
      this.signatoryAddress.markAsTouched();
      this.signatureToVerify.markAsTouched();
    }
  }

  onCloseSignatureVerification() {
    this.verifySignedDataModal.hide();
    setTimeout(() => {
      this.verifySignedDataIsSubmitted = false;
      this.verificationSuccess = false;
      this.verifySignedDataForm.reset();
    }, 300); // Animation of modal hide time
  }

  /* Signed data table */
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  dataSource = new MatTableDataSource(FAKE_SIGNED_DATA);
  displayedColumns: string[] = ['id', 'data', 'signature', 'actions'];
  
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

export interface SignedData {
  id: number;
  data: string;
  signature: string;
}

const FAKE_SIGNED_DATA: SignedData[] = [
  {
    id: 1,
    data: 'myImportantData',
    signature: 'SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz'
  },
  {
    id: 2,
    data: 'myImportantData',
    signature: 'SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz'
  },
  {
    id: 3,
    data: 'myImportantData',
    signature: 'SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz'
  },
  {
    id: 4,
    data: 'myImportantData',
    signature: 'SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz'
  },
  {
    id: 5,
    data: 'myImportantData',
    signature: 'SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz'
  },
]
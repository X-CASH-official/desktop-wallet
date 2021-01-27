import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-wallet-sign-data',
  templateUrl: './wallet-sign-data.component.html',
  styleUrls: ['./wallet-sign-data.component.scss']
})
export class WalletSignDataComponent implements OnInit {

  constructor(private validatorRegexService: ValidatorsRegexService,private RpcCallsService: RpcCallsService, private DatabaseService: DatabaseService) { }

  createdSignature: string = "SigV13jebbGm9a1H4PbfXd1SZyPPmRtnJAJaoyf6Q3pE1ABsCT1MmiG3VyALNYmHEnjYhx71Z5Yx2TQenjb18C3DKRkGz";

  /* Sign data modal */
  @ViewChild('signDataModal1', { static: true }) signDataModal1: UiModalComponent;
  @ViewChild('signDataModal2', { static: true }) signDataModal2: UiModalComponent;

  dataToSignForm = new FormGroup({
    dataToSign: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.data_to_sign)]),
  });
  get dataToSign() {
    return this.dataToSignForm.get('dataToSign');
  }

  async onSubmitDataToSign() {
    if (this.dataToSignForm.valid) {
      console.log(this.dataToSignForm);
      this.createdSignature = await this.RpcCallsService.createSignedData(this.dataToSignForm.value.dataToSign);
      // save the data to the database
      await this.DatabaseService.saveSignedData({"data":this.dataToSignForm.value.dataToSign,"signature":this.createdSignature});
      this.signDataModal1.hide();
      this.signDataModal2.show();
      this.dataToSignForm.setValue({dataToSign: ''});
      this.loadSignedData();
    } else {
      this.dataToSign.markAsTouched();
    }
  }


  /* Verify signed data modal */
  @ViewChild('verifySignedDataModal', { static: true }) verifySignedDataModal: UiModalComponent;

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

  async onSubmitVerifySignedData() {
    console.log(this.verifySignedDataForm);
    if (this.verifySignedDataForm.valid) {
      this.verifySignedDataIsSubmitted = true;
      // TODO: process of signature verification
      this.verificationSuccess = await this.RpcCallsService.verifySignedData({"data":this.verifySignedDataForm.value.dataToVerify,"public_address":this.verifySignedDataForm.value.signatoryAddress,"signature":this.verifySignedDataForm.value.signatureToVerify});
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
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'data', 'signature', 'actions'];
  
  ngOnInit() {  
    this.loadSignedData();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async loadSignedData()
  {
    try
    {
    this.dataSource = new MatTableDataSource(await this.DatabaseService.getSignedData());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  catch(error)
  {

  }
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

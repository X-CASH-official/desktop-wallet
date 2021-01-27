import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-wallet-reserve-proof',
  templateUrl: './wallet-reserve-proof.component.html',
  styleUrls: ['./wallet-reserve-proof.component.scss']
})
export class WalletReserveProofComponent implements OnInit {

  constructor(private validatorRegexService: ValidatorsRegexService,private RpcCallsService: RpcCallsService, private DatabaseService: DatabaseService) { }

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

  async onSubmitCreateReserveProof() {
    if (this.createReserveProofForm.valid) {
      this.createReserveProofForm.get('amountToProve');
      this.createReserveProofForm.get('messageToProve');
      console.log(`amount = ${this.createReserveProofForm.value.amountToProve}`);
      this.createdReserveSignature = await this.RpcCallsService.createReserveproof({"amount":this.createReserveProofForm.value.amountToProve * 1000000,"message":this.createReserveProofForm.value.messageToProve});
      // save the data to the database
      await this.DatabaseService.saveReserveproof({"reserve_proof":this.createdReserveSignature,"balance":this.createReserveProofForm.value.amountToProve * 1000000,"message":this.createReserveProofForm.value.messageToProve});
      this.createReserveProofModal1.hide();
      this.createReserveProofModal2.show();
      this.createReserveProofForm.setValue({amountToProve: '', messageToProve: ''});
      this.loadReserveproofs();      
    } else {
      this.amountToProve.markAsTouched();
    }
  }

  createdReserveSignature: string;

  /* Verify reserve proof modal */
  @ViewChild('verifyReserveProofModal', { static: true }) verifySignedDataModal: UiModalComponent;

  verifyReserveProofForm = new FormGroup({
    addressToVerify: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.xcash_address)]),
    messageToVerify: new FormControl('', [Validators.pattern(this.validatorRegexService.text_settings)]),
    signatureToVerify: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.reserve_proof)])
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

  async onSubmitReserveProof() {
    if (this.verifyReserveProofForm.valid) {
      this.verifyReserveProofIsSubmitted = true;
      // TODO: process of reserve proof verification
      this.verificationSuccess = await this.RpcCallsService.verifyReserveproof({"public_address":this.verifyReserveProofForm.value.addressToVerify,"message":this.verifyReserveProofForm.value.messageToVerify,"reserveproof":this.verifyReserveProofForm.value.signatureToVerify});
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
  
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'amount', 'signature', 'status', 'actions'];
  
  ngOnInit() {  
    this.loadReserveproofs();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async loadReserveproofs()
  {
    let data = await this.DatabaseService.getReserveproof();
    try
    {
    this.dataSource = new MatTableDataSource(data);
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

export interface ReserveProof {
  id: number;
  amount: number;
  signature: string;
  status: string;
}

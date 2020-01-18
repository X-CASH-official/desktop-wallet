import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';


@Component({
  selector: 'app-wallet-integrated-address',
  templateUrl: './wallet-integrated-address.component.html',
  styleUrls: ['./wallet-integrated-address.component.scss']
})
export class WalletIntegratedAddressComponent implements OnInit {
  
  constructor(private validatorRegexService: ValidatorsRegexService) { }

  /* Create integrated address modal */
  @ViewChild('createIntegratedAddressModal1', { static: true }) createIntegratedAddressModal1: UiModalComponent;
  @ViewChild('createIntegratedAddressModal2', { static: true }) createIntegratedAddressModal2: UiModalComponent;

  paymentIDForm = new FormGroup({
    encryptedPaymentID: new FormControl('', [Validators.pattern(this.validatorRegexService.encrypted_payment_id)]),
  });
  get encryptedPaymentID() {
    return this.paymentIDForm.get('encryptedPaymentID');
  }
  onSubmitPaymentID() {
    if (this.paymentIDForm.valid) {
      console.log(this.paymentIDForm);
      // fake creation
      this.createdIntegratedAddress = "XCB1yBRF4nz4nUD0bA1y7QPwCvGS4PUJbiGMq95xC6cYLBdfGaziuSTFrzZ2SZndgKrQv314sAn0yA1TwsG8vG02YFRGyCli60";
      this.createIntegratedAddressModal1.hide();
      this.createIntegratedAddressModal2.show();
    }
  }

  createdIntegratedAddress: string;
  
  /* addresses table */
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  dataSource = new MatTableDataSource(FAKE_INTEGRATED_ADDRESSES);
  displayedColumns: string[] = ['id', 'paymentID', 'address', 'actions'];
  
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

export interface IntegratedAddress {
  id: number;
  paymentID: string;
  address: string;
}

const FAKE_INTEGRATED_ADDRESSES: IntegratedAddress[] = [
  {
    id: 1,
    paymentID: '69b88ef07cf4ca44',
    address: 'XCB1sTI1FRP0tfjs98pK8L6gLJ2kxkSJjDtyQ2xoCiChG2cubBzGFrbfbz1lkbhsei6HGb3LTvHQ5i49QjdRIwacaOTe6TyFdR'
  },
  {
    id: 2,
    paymentID: '521ba4cfc00e7d02',
    address: 'XCB1yBRF4nz4nUD0bA1y7QPwCvGS4PUJbiGMq95xC6cYLBdfGaziuSTFrzZ2SZndgKrQv314sAn0yA1TwsG8vG02YFRGyCli60'
  },
  {
    id: 3,
    paymentID: 'c469978784485152',
    address: 'XCB1CDvRlFT49UkTxs5LEsdRKzAGUFzhibJK9q8wdzvLEihrUjIp6L01Aot1SGZNQmwm0t9Ik5j08feBFFigVbtnUtftzPY49N'
  },
  {
    id: 4,
    paymentID: 'd231e9143784a720',
    address: 'XCB1dthsFrvTxnRzbH5huCDMnvJbyUa2C2SVl6EcjMqU6qLb03RxOcvBwx3FZkpwQ9XP6gJb55qQkPsXpqnGABLdC1DwyDvJSt'
  },
  {
    id: 5,
    paymentID: 'd37c63b87bfbe340',
    address: 'XCB1lN164JLRntr5v6IklmuagfbQb1bZ34xhXE7iBFaHFM6V3WyNLbAI5XkfRS4xWcFlElKg0U01CupyVK1SMgqI99VsMUCKqO'
  },
]
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-wallet-sub-address',
  templateUrl: './wallet-sub-address.component.html',
  styleUrls: ['./wallet-sub-address.component.scss']
})
export class WalletSubAddressComponent implements OnInit {
  
  constructor() { }

  /* Create integrated address modal */
  @ViewChild('createSubAddressModal1') createSubAddressModal1: UiModalComponent;
  @ViewChild('createSubAddressModal2') createSubAddressModal2: UiModalComponent;

  createdSubAddress: string;

  labelForm = new FormGroup({
    label: new FormControl('', []),
  });
  get label() {
    return this.labelForm.get('label');
  }

  onSubmitLabel() {
    if (this.labelForm.valid) {
      console.log(this.labelForm);
      this.createdSubAddress = 'XCB1sTI1FRP0tfjs98pK8L6gLJ2kxkSJjDtyQ2xoCiChG2cubBzGFrbfbz1lkbhsei6HGb3LTvHQ5i49QjdRIwacaOTe6TyFdR';
      this.createSubAddressModal1.hide();
      this.createSubAddressModal2.show();
    }
  }

  /* addresses table */
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  dataSource = new MatTableDataSource(FAKE_SUB_ADDRESSES);
  displayedColumns: string[] = ['id', 'label', 'address', 'actions'];
  
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

export interface SubAddress {
  id: number;
  label: string;
  address: string;
}

const FAKE_SUB_ADDRESSES: SubAddress[] = [
  {
    id: 1,
    label: 'label1',
    address: 'XCB1sTI1FRP0tfjs98pK8L6gLJ2kxkSJjDtyQ2xoCiChG2cubBzGFrbfbz1lkbhsei6HGb3LTvHQ5i49QjdRIwacaOTe6TyFdR'
  },
  {
    id: 2,
    label: 'label2',
    address: 'XCB1yBRF4nz4nUD0bA1y7QPwCvGS4PUJbiGMq95xC6cYLBdfGaziuSTFrzZ2SZndgKrQv314sAn0yA1TwsG8vG02YFRGyCli60'
  },
  {
    id: 3,
    label: 'label3',
    address: 'XCB1CDvRlFT49UkTxs5LEsdRKzAGUFzhibJK9q8wdzvLEihrUjIp6L01Aot1SGZNQmwm0t9Ik5j08feBFFigVbtnUtftzPY49N'
  },
  {
    id: 4,
    label: 'label4',
    address: 'XCB1dthsFrvTxnRzbH5huCDMnvJbyUa2C2SVl6EcjMqU6qLb03RxOcvBwx3FZkpwQ9XP6gJb55qQkPsXpqnGABLdC1DwyDvJSt'
  },
  {
    id: 5,
    label: 'label5',
    address: 'XCB1lN164JLRntr5v6IklmuagfbQb1bZ34xhXE7iBFaHFM6V3WyNLbAI5XkfRS4xWcFlElKg0U01CupyVK1SMgqI99VsMUCKqO'
  },
]
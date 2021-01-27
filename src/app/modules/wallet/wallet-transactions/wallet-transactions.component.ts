import { Component, OnInit, ViewChild } from '@angular/core';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';

@Component({
  selector: 'app-wallet-transactions',
  templateUrl: './wallet-transactions.component.html',
  styleUrls: ['./wallet-transactions.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed, void => expanded', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WalletTransactionsComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('TXKeyModal', { static: true }) TXKeyModal: UiModalComponent;

  dataSource;
  columnsToDisplay = ['id', 'amount', 'Transaction ID', 'Transaction Type', 'date'];
  expandedTransaction: Transaction | null;

  TXKey:string;

  constructor(private RpcCallsService: RpcCallsService) { }

  async ngOnInit() { 
    while (this.RpcCallsService.wallet_status === false)
    {
      await this.RpcCallsService.sleep(1000);
    }
    this.loadTransactions();  
    setInterval(() => this.loadTransactions(), 300000);
  }

  async loadTransactions()
  {
    try
    {
      this.dataSource = new MatTableDataSource(await this.RpcCallsService.getTransactions());
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    catch(error)
    {
  
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getTXKey(txid:string)
  {
    try
    {
      this.TXKey = await this.RpcCallsService.getTxKey(txid);
    }
    catch(error)
    {
      this.TXKey = "No TX Key found for this transaction";
    }
    this.TXKeyModal.show();
  }
}

export interface Transaction {
  id: number;
  amount: number;
  txid: string;
  date: Date;
  transactionType:string;
  type: string;
  fees: number;
  paymentid: string;
  blockHeight: number;
}

const FAKE_TRANSACTIONS: Transaction[] = [
  {
    id: 1242152,
    amount: 1230492,
    txid: '0000000000000000000000000000000000000000000000000000000000000000',
    date: new Date('December 17, 1995 03:24:00'),
    transactionType: "in",
    type: 'private',
    fees: 12342,
    paymentid: "0000000000000000",
    blockHeight: 1234,
  },
  {
    id: 12423152,
    amount: 12340492,
    txid: '0000000000000000000000000000000000000000000000000000000000000000',
    date: new Date('December 24, 2007 06:24:00'),
    transactionType: "in",
    type: 'public',
    fees: 1948,
    paymentid: "0000000000000000",
    blockHeight: 123234,
  },
  {
    id: 12423152,
    amount: 12340492,
    txid: '0000000000000000000000000000000000000000000000000000000000000000',
    date: new Date('December 24, 2007 06:24:00'),
    transactionType: "in",
    type: 'public',
    fees: 1948,
    paymentid: "0000000000000000",
    blockHeight: 123234,
  },
  {
    id: 12423152,
    amount: 12340492,
    txid: '0000000000000000000000000000000000000000000000000000000000000000',
    date: new Date('December 24, 2007 06:24:00'),
    transactionType: "in",
    type: 'public',
    fees: 1948,
    paymentid: "0000000000000000",
    blockHeight: 123234,
  },
  {
    id: 12423152,
    amount: 12340492,
    txid: '0000000000000000000000000000000000000000000000000000000000000000',
    date: new Date('December 24, 2007 06:24:00'),
    transactionType: "in",
    type: 'public',
    fees: 1948,
    paymentid: "0000000000000000",
    blockHeight: 123234,
  },
  {
    id: 12423152,
    amount: 12340492,
    txid: '0000000000000000000000000000000000000000000000000000000000000000',
    date: new Date('December 24, 2007 06:24:00'),
    transactionType: "in",
    type: 'public',
    fees: 1948,
    paymentid: "0000000000000000",
    blockHeight: 123234,
  },
  {
    id: 12423152,
    amount: 12340492,
    txid: '0000000000000000000000000000000000000000000000000000000000000000',
    date: new Date('December 24, 2007 06:24:00'),
    transactionType: "in",
    type: 'public',
    fees: 1948,
    paymentid: "0000000000000000",
    blockHeight: 123234,
  },
]


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-wallet-transactions',
  templateUrl: './wallet-transactions.component.html',
  styleUrls: ['./wallet-transactions.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WalletTransactionsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource(FAKE_TRANSACTIONS);
  columnsToDisplay = ['id', 'amount', 'recipient', 'date'];
  expandedTransaction: Transaction | null;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}

export interface Transaction {
  id: number;
  amount: number;
  recipient: string;
  date: Date;
  type: string;
  fees: number;
  total: number;
  blockHeight: number;
}

const FAKE_TRANSACTIONS: Transaction[] = [
  {
    id: 1242152,
    amount: 1230492,
    recipient: 'XCA1r7VKaXa0G1dibca68D09MeqK7e4FyVIypXJ7CafJt8IbGNtFYkhcS1dWAzqo8ecQJndKtoinC5Rmj3r32HYHFtJn9M6dTQ',
    date: new Date('December 17, 1995 03:24:00'),
    type: 'private',
    fees: 12342,
    total: 12342341,
    blockHeight: 1234,
  },
  {
    id: 12423152,
    amount: 12340492,
    recipient: 'XCA1r7VKkXa0G1dibca68D09MeqK7e4FyVIypXJ7CafJt8IbGNtFYkhcS1dWAzqo8ecQJndKtoinC5Rmj3r32HYHFtJn9M6dTQ',
    date: new Date('December 24, 2007 06:24:00'),
    type: 'public',
    fees: 1948,
    total: 1237462341,
    blockHeight: 123234,
  },
  {
    id: 12423152,
    amount: 12340492,
    recipient: 'XCA1r7VKkXa0G1dibca68D09MeqK7e4FyVIypXJ7CafJt8IbGNtFYkhcS1dWAzqo8ecQJndKtoinC5Rmj3r32HYHFtJn9M6dTQ',
    date: new Date('December 24, 2007 06:24:00'),
    type: 'public',
    fees: 1948,
    total: 1237462341,
    blockHeight: 123234,
  },
  {
    id: 12423152,
    amount: 12340492,
    recipient: 'XCA1r7VKkXa0G1dibca68D09MeqK7e4FyVIypXJ7CafJt8IbGNtFYkhcS1dWAzqo8ecQJndKtoinC5Rmj3r32HYHFtJn9M6dTQ',
    date: new Date('December 24, 2007 06:24:00'),
    type: 'public',
    fees: 1948,
    total: 1237462341,
    blockHeight: 123234,
  },
  {
    id: 12423152,
    amount: 12340492,
    recipient: 'XCA1r7VKkXa0G1dibca68D09MeqK7e4FyVIypXJ7CafJt8IbGNtFYkhcS1dWAzqo8ecQJndKtoinC5Rmj3r32HYHFtJn9M6dTQ',
    date: new Date('December 24, 2007 06:24:00'),
    type: 'public',
    fees: 1948,
    total: 1237462341,
    blockHeight: 123234,
  },
  {
    id: 12423152,
    amount: 12340492,
    recipient: 'XCA1r7VKkXa0G1dibca68D09MeqK7e4FyVIypXJ7CafJt8IbGNtFYkhcS1dWAzqo8ecQJndKtoinC5Rmj3r32HYHFtJn9M6dTQ',
    date: new Date('December 24, 2007 06:24:00'),
    type: 'public',
    fees: 1948,
    total: 1237462341,
    blockHeight: 123234,
  },
  {
    id: 12423152,
    amount: 12340492,
    recipient: 'XCA1r7VKkXa0G1dibca68D09MeqK7e4FyVIypXJ7CafJt8IbGNtFYkhcS1dWAzqo8ecQJndKtoinC5Rmj3r32HYHFtJn9M6dTQ',
    date: new Date('December 24, 2007 06:24:00'),
    type: 'public',
    fees: 1948,
    total: 1237462341,
    blockHeight: 123234,
  },
]


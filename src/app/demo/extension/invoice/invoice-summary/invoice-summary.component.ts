import { Component, OnInit } from '@angular/core';

import '../../../../../../node_modules/morris.js/morris.js';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.scss']
})
export class InvoiceSummaryComponent implements OnInit {
  public barSaleExpensesMorrisOption = {
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Sales', 'Expenses'],
    resize: true,
    responsive: true,
    barSizeRatio: 0.70,
    barGap: 5,
    barColors: ['0-#1de9b6-#1dc4e9', '0-#899FD4-#A389D4']
  };
  public barSaleExpensesMorrisData = [
    { y: '2012', a: 50, b: 40 },
    { y: '2013', a: 75,  b: 65 },
    { y: '2014', a: 50,  b: 40 },
    { y: '2015', a: 75,  b: 65 },
    { y: '2016', a: 100,  b: 90 }
  ];

  constructor() { }

  ngOnInit() {
  }

}

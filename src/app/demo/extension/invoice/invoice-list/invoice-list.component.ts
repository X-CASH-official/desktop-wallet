import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  public isCompleteStatus = false;
  public isAssignUsers = false;
  public isRevision = false;

  constructor() { }

  ngOnInit() {
  }

}

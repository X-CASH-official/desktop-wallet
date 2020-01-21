import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';

@Component({
  selector: 'app-wallet-sub-address',
  templateUrl: './wallet-sub-address.component.html',
  styleUrls: ['./wallet-sub-address.component.scss']
})
export class WalletSubAddressComponent implements OnInit {
  
  constructor(private RpcCallsService: RpcCallsService) { }

  /* Create integrated address modal */
  @ViewChild('createSubAddressModal1', { static: true }) createSubAddressModal1: UiModalComponent;
  @ViewChild('createSubAddressModal2', { static: true }) createSubAddressModal2: UiModalComponent;

  createdSubAddress: string;

  labelForm = new FormGroup({
    label: new FormControl('', []),
  });
  get label() {
    return this.labelForm.get('label');
  }

  async onSubmitLabel() {
    if (this.labelForm.valid) {
      this.createdSubAddress = await this.RpcCallsService.createSubAddress(this.labelForm.value.label);
      this.createSubAddressModal1.hide();
      this.createSubAddressModal2.show();
      this.labelForm.setValue({label: ''});
      this.loadSubAddresses();
    }
  }

  /* addresses table */
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  dataSource;
  displayedColumns: string[] = ['id', 'label', 'address', 'balance', 'actions'];
  
  ngOnInit() {  
    this.loadSubAddresses();
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async loadSubAddresses()
  {
    try
    {
    this.dataSource = new MatTableDataSource(await this.RpcCallsService.getSubAddresses(await this.RpcCallsService.getSubAddressCount()));
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

export interface SubAddress {
  id: number;
  label: string;
  address: string;
  balance: number;
}
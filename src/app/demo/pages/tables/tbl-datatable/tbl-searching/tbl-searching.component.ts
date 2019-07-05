import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'app-tbl-searching',
  templateUrl: './tbl-searching.component.html',
  styleUrls: ['./tbl-searching.component.scss']
})
export class TblSearchingComponent implements OnInit, AfterViewInit {
  dtColumnSearchingOptions: any = {};
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  constructor() { }

  ngOnInit() {
    this.dtColumnSearchingOptions = {
      ajax: 'fake-data/datatable-data.json',
      columns: [{
        title: 'Name',
        data: 'name'
      }, {
        title: 'Position',
        data: 'position'
      }, {
        title: 'Office',
        data: 'office'
      }, {
        title: 'Age',
        data: 'age'
      }, {
        title: 'Start Date',
        data: 'date'
      }, {
        title: 'Salary',
        data: 'salary'
      }],
      responsive: true
    };
  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

}

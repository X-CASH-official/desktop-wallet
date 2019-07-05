import { Component, OnInit } from '@angular/core';

declare var $: any;

import '../../../../assets/charts/flot/jquery.flot.js';
import '../../../../assets/charts/flot/jquery.flot.categories.js';
import '../../../../assets/charts/flot/curvedLines.js';
import '../../../../assets/charts/flot/jquery.flot.tooltip.min.js';

@Component({
  selector: 'app-main_menu',
  templateUrl: './main_menu.component.html',
  styleUrls: ['./main_menu.component.scss']
})
export class main_menuComponent implements OnInit {

  // Variables
  total_wallets:number = 0;

  constructor() { }

  ngOnInit() {    

}
}
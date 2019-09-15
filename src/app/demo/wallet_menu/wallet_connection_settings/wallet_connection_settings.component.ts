import { Component, OnInit } from '@angular/core';

declare var $: any;

import '../../../../assets/charts/flot/jquery.flot.js';
import '../../../../assets/charts/flot/jquery.flot.categories.js';
import '../../../../assets/charts/flot/curvedLines.js';
import '../../../../assets/charts/flot/jquery.flot.tooltip.min.js';

@Component({
  selector: 'app-wallet_connection_settings',
  templateUrl: './wallet_connection_settings.component.html',
  styleUrls: ['./wallet_connection_settings.component.scss']
})
export class wallet_connection_settingsComponent implements OnInit {

  // Variables
  total_wallets:number = 0;

  constructor() { }

  ngOnInit() {    

}
}
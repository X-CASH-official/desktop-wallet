import { Component, OnInit } from '@angular/core';
import { variables_and_functions_service } from '../../../services/variables_and_functions.service';

declare const AmCharts: any;
declare const $: any;

import '../../../../assets/charts/amchart/amcharts.js';
import '../../../../assets/charts/amchart/gauge.js';
import '../../../../assets/charts/amchart/serial.js';
import '../../../../assets/charts/amchart/light.js';
import '../../../../assets/charts/amchart/pie.min.js';
import '../../../../assets/charts/amchart/ammap.min.js';
import '../../../../assets/charts/amchart/usaLow.js';
import '../../../../assets/charts/amchart/radar.js';
import '../../../../assets/charts/amchart/worldLow.js';

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
  total_wallets: number = 0;
  password: string;
  data: string; $
  isWalletHere = false;

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  ngOnInit() {
    this.reset_data();

    setTimeout(() => {

      AmCharts.makeChart('line-area2', {
        'type': 'serial',
        'theme': 'light',
        'marginTop': 10,
        'marginRight': 0,
        'dataProvider': [{
          'year': 'Jan',
          'value': 5,
          'value2': 80,
        }, {
          'year': 'Feb',
          'value': 30,
          'value2': 95,
        }, {
          'year': 'Mar',
          'value': 25,
          'value2': 87,
        }, {
          'year': 'Apr',
          'value': 55,
          'value2': 155,
        }, {
          'year': 'May',
          'value': 45,
          'value2': 140,
        }, {
          'year': 'Jun',
          'value': 65,
          'value2': 147,
        }, {
          'year': 'Jul',
          'value': 60,
          'value2': 130,
        }, {
          'year': 'Aug',
          'value': 105,
          'value2': 180,
        }, {
          'year': 'Sep',
          'value': 80,
          'value2': 160,
        }, {
          'year': 'Oct',
          'value': 110,
          'value2': 175,
        }, {
          'year': 'Nov',
          'value': 120,
          'value2': 165,
        }, {
          'year': 'Dec',
          'value': 150,
          'value2': 200,
        }],
        'valueAxes': [{
          'axisAlpha': 0,
          'position': 'left'
        }],
        'graphs': [{
          'id': 'g1',
          'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
          'bullet': 'round',
          'lineColor': '#1de9b6',
          'lineThickness': 3,
          'negativeLineColor': '#1de9b6',
          'valueField': 'value'
        }, {
          'id': 'g2',
          'balloonText': '[[category]]<br><b><span style="font-size:14px;">[[value]]</span></b>',
          'bullet': 'round',
          'lineColor': '#10adf5',
          'lineThickness': 3,
          'negativeLineColor': '#10adf5',
          'valueField': 'value2'
        }],
        'chartCursor': {
          'cursorAlpha': 0,
          'valueLineEnabled': true,
          'valueLineBalloonEnabled': true,
          'valueLineAlpha': 0.3,
          'fullWidth': true
        },
        'categoryField': 'year',
        'categoryAxis': {
          'minorGridAlpha': 0,
          'minorGridEnabled': true,
          'gridAlpha': 0,
          'axisAlpha': 0,
          'lineAlpha': 0
        },
        'legend': {
          'useGraphSettings': true,
          'position': 'top'
        },
      });

    }, 500);
  }

  reset_data() {
    this.data = "";
  }

  verify_data(item: string, data: string) {
    if (item === "create_wallet_1") {
      // verify the wallet name for creating a wallet 
      return this.variables_and_functions_service.text_settings.test(data);
    }
    if (item === "create_wallet_2") {
      // verify the password for creating a wallet  
      this.password = data;
      return this.variables_and_functions_service.text_settings.test(data);
    }
    if (item === "create_wallet_3") {
      // verify the confirm password for creating a wallet      
      return this.variables_and_functions_service.text_settings.test(data) && data === this.password;
    }
    if (item === "import_wallet_1") {
      // verify the mnemonic seed or private key for importing a wallet  
      return this.variables_and_functions_service.mnemonic_seed_or_private_key.test(data);
    }
    if (item === "import_wallet_1_5") {
      // verify the view key for importing a wallet  
      return this.variables_and_functions_service.private_key.test(data);
    }
    if (item === "import_wallet_2") {
      // verify the wallet password for importing a wallet 
      this.password = data;
      return this.variables_and_functions_service.text_settings.test(data);
    }
    if (item === "import_wallet_3") {
      // verify the confirm password for importing a wallet      
      return this.variables_and_functions_service.text_settings.test(data) && data === this.password;
    }
    return false;
  }
}
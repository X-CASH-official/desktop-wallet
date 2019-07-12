import { Component, OnInit } from '@angular/core';

declare const AmCharts: any;
declare var $: any;

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
  selector: 'app-dash-crm',
  templateUrl: './dash-crm.component.html',
  styleUrls: ['./dash-crm.component.scss']
})
export class DashCrmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      $.plot($('#transactions'), [{
        data: [
          [0, 48],
          [1, 30],
          [2, 25],
          [3, 30],
          [4, 20],
          [5, 40],
          [6, 30],
        ],
        color: '#1dc4e9',
        bars: {
          show: true,
          lineWidth: 1,
          fill: true,
          fillColor: {
            colors: [{
              opacity: 1
            }, {
              opacity: 1
            }]
          },
          barWidth: 0.2,
          align: 'center',
          horizontal: false
        },
        points: {
          show: false,
          radius: 3,
          fill: true
        },
        curvedLines: {
          apply: false,
        }
      }], {
        series: {
          label: '',
          curvedLines: {
            active: true,
            nrSplinePoints: 0
          },
        },
        tooltip: {
          show: true,
          content: 'x : %x | y : %y'
        },
        grid: {
          hoverable: true,
          borderWidth: 0,
          labelMargin: 0,
          axisMargin: 0,
          minBorderMargin: 0,
        },
        yaxis: {
          min: 0,
          max: 50,
          color: 'transparent',
          font: {
            size: 0,
          }
        },
        xaxis: {
          color: 'transparent',
          font: {
            size: 0,
          }
        }
      });

      AmCharts.makeChart('bar-chart', {
        'type': 'serial',
        'theme': 'light',
        'dataProvider': [{
          'game': 'Sport',
          'visits': 53,
          'color': ['#1de9b6', '#1dc4e9']
        }, {
          'game': 'Music',
          'visits': 13,
          'color': ['#a389d4', '#899ed4']
        }, {
          'game': 'Travel',
          'visits': 30,
          'color': ['#04a9f5', '#049df5']
        }, {
          'game': 'News',
          'visits': 4,
          'color': ['#f44236', '#f48f36']
        }],
        'valueAxes': [{
          'gridAlpha': 0,
          'axisAlpha': 0,
          'lineAlpha': 0,
          'fontSize': 0,
        }],
        'startDuration': 1,
        'graphs': [{
          'balloonText': '<b>[[category]]: [[value]]</b>',
          'fillColorsField': 'color',
          'fillAlphas': 0.9,
          'lineAlpha': 0,
          'columnWidth': 0.2,
          'type': 'column',
          'valueField': 'visits'
        }],
        'chartCursor': {
          'categoryBalloonEnabled': false,
          'cursorAlpha': 0,
          'zoomable': false
        },
        'categoryField': 'game',
        'categoryAxis': {
          'gridPosition': 'start',
          'gridAlpha': 0,
          'axisAlpha': 0,
          'lineAlpha': 0,
        }
      });

      const chartCall = [{
        'year': '2000',
        'value': 55
      }, {
        'year': '2001',
        'value': 45
      }, {
        'year': '2002',
        'value': 60
      }, {
        'year': '2003',
        'value': 80
      }, {
        'year': '2004',
        'value': 70
      }, {
        'year': '2005',
        'value': 55
      }];
      const chartCallAM = AmCharts.makeChart('call-chart', {
        'type': 'serial',
        'addClassNames': true,
        'defs': {
          'filter': [{
            'x': '-50%',
            'y': '-50%',
            'width': '200%',
            'height': '200%',
            'id': 'blur',
            'feGaussianBlur': {
              'in': 'SourceGraphic',
              'stdDeviation': '30'
            }
          },
            {
              'id': 'shadow',
              'x': '-10%',
              'y': '-10%',
              'width': '120%',
              'height': '120%',
              'feOffset': {
                'result': 'offOut',
                'in': 'SourceAlpha',
                'dx': '0',
                'dy': '20'
              },
              'feGaussianBlur': {
                'result': 'blurOut',
                'in': 'offOut',
                'stdDeviation': '10'
              },
              'feColorMatrix': {
                'result': 'blurOut',
                'type': 'matrix',
                'values': '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0'
              },
              'feBlend': {
                'in': 'SourceGraphic',
                'in2': 'blurOut',
                'mode': 'normal'
              }
            }
          ]
        },
        'fontSize': 15,
        'dataProvider': chartCall,
        'autoMarginOffset': 0,
        'marginRight': 0,
        'categoryField': 'year',
        'categoryAxis': {
          'color': '#fff',
          'gridAlpha': 0,
          'axisAlpha': 0,
          'lineAlpha': 0,
          'offset': -20,
          'inside': true,
          'parseDates': true,
          'minPeriod': 'YYYY'
        },
        'valueAxes': [{
          'fontSize': 0,
          'inside': true,
          'gridAlpha': 0,
          'axisAlpha': 0,
          'lineAlpha': 0,
          'minimum': 0,
          'maximum': 100,
        }],
        'chartCursor': {
          'valueLineEnabled': false,
          'valueLineBalloonEnabled': false,
          'cursorAlpha': 0,
          'zoomable': false,
          'valueZoomable': false,
          'cursorColor': '#fff',
          'categoryBalloonColor': '#95ead5',
          'valueLineAlpha': 0
        },
        'graphs': [{
          'id': 'g1',
          /*'type': 'line',*/
          'valueField': 'value',
          'fillColors': [
            '#1de9b6',
            '#1dc4e9'
          ],
          'lineAlpha': 0,
          'fillAlphas': 1,
          'showBalloon': true,
          'type': 'smoothedLine',
          'balloon': {
            'drop': true,
            'adjustBorderColor': false,
            'color': '#ffffff',
            'fillAlphas': 0.2,
            'bullet': 'round',
            'bulletBorderAlpha': 1,
            'bulletSize': 5,
            'hideBulletsCount': 50,
            'lineThickness': 2,
            'useLineColorForBulletBorder': true,
            'valueField': 'value',
            'balloonText': '<span style="font-size:18px;">[[value]]</span>'
          },
        }, ],
      });
      setTimeout(() => {
        chartCallAM.zoomToIndexes(1, chartCall.length - 2);
      }, 400);
    }, 500);
  }

}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-crt-chart-js',
  templateUrl: './crt-chart-js.component.html',
  styleUrls: ['./crt-chart-js.component.scss']
})
export class CrtChartJsComponent implements OnInit {
  public barBasicChartData: any;
  public barBasicChartOption: any;
  @ViewChild('barBasicChart') barBasicChart: ElementRef; // used barStackedChart, barHorizontalChart
  public barBasicChartTag: CanvasRenderingContext2D;

  public barStackedChartOption: any;

  public lineIPMChartData: any;
  public lineIPMChartOption: any;
  @ViewChild('lineIPMChart') lineIPMChart: ElementRef;
  public lineIPMChartTag: CanvasRenderingContext2D;

  public areaBasicChartData: any;
  public areaBasicChartOption: any;
  @ViewChild('areaBasicChart') areaBasicChart: ElementRef;
  public areaBasicChartTag: CanvasRenderingContext2D;

  public areaFillOriginChartData: any;
  @ViewChild('areaFillOriginChart') areaFillOriginChart: ElementRef;
  public areaFillOriginChartTag: CanvasRenderingContext2D;

  public areaFillEndChartData: any;
  @ViewChild('areaFillEndChart') areaFillEndChart: ElementRef;
  public areaFillEndChartTag: CanvasRenderingContext2D;

  public areaRadar1ChartData: any;
  @ViewChild('areaRadar1Chart') areaRadar1Chart: ElementRef;
  public areaRadar1ChartTag: CanvasRenderingContext2D;

  public areaRadar2ChartData: any;
  @ViewChild('areaRadar2Chart') areaRadar2Chart: ElementRef;
  public areaRadar2ChartTag: CanvasRenderingContext2D;

  public areaRadar3ChartData: any;
  @ViewChild('areaRadar3Chart') areaRadar3Chart: ElementRef;
  public areaRadar3ChartTag: CanvasRenderingContext2D;

  public pieChartData: any;
  @ViewChild('pieChart') pieChart: ElementRef; // doughnut
  public pieChartTag: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      /* bar basic chart */
      const bar_basic_tag = (((<HTMLCanvasElement>this.barBasicChart.nativeElement).children));
      this.barBasicChartTag = ((bar_basic_tag['bar_basic_chart']).lastChild).getContext('2d');
      // used bar_stacked_chart, bar_horizontal_chart
      const abc = (this.barBasicChartTag).createLinearGradient(0, 300, 0, 0);
      abc.addColorStop(0, '#1de9b6');
      abc.addColorStop(1, '#1dc4e9');
      const def = (this.barBasicChartTag).createLinearGradient(0, 300, 0, 0);
      def.addColorStop(0, '#899FD4');
      def.addColorStop(1, '#A389D4');

      this.barBasicChartData = {
        labels: [0, 1, 2, 3],
        datasets: [{
          label: 'Data 1',
          data: [25, 45, 74, 85],
          borderColor: abc,
          backgroundColor: abc,
          hoverborderColor: abc,
          hoverBackgroundColor: abc,
        }, {
          label: 'Data 2',
          data: [30, 52, 65, 65],
          borderColor: def,
          backgroundColor: def,
          hoverborderColor: def,
          hoverBackgroundColor: def,
        }]
      };

      this.barBasicChartOption = {
        barValueSpacing: 20
      };

      /* bar stacked chart */
      this.barStackedChartOption = {
        barValueSpacing: 20,
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }
      };

      /* line interpolation mode chart */
      const line_ipm_tag = (((<HTMLCanvasElement>this.lineIPMChart.nativeElement).children));
      this.lineIPMChartTag = ((line_ipm_tag['line_ipm_chart']).lastChild).getContext('2d');
      const klm = (this.lineIPMChartTag).createLinearGradient(0, 0, 500, 0);
      klm.addColorStop(0, '#899FD4');
      klm.addColorStop(1, '#A389D4');
      const hij = (this.lineIPMChartTag).createLinearGradient(0, 0, 500, 0);
      hij.addColorStop(0, 'rgba(29, 233, 182, 0.4)');
      hij.addColorStop(1, 'rgba(29, 196, 233, 0.5)');

      this.lineIPMChartData = {
        labels: [0, 1, 2, 3, 4, 5, 6],
        datasets: [{
          label: 'D1',
          data: [55, 70, 62, 81, 56, 70, 90],
          fill: false,
          borderWidth: 4,
          lineTension: 0,
          borderDash: [15, 10],
          borderColor: klm,
          backgroundColor: klm,
          hoverborderColor: klm,
          hoverBackgroundColor: klm,
        }, {
          label: 'D2',
          data: [85, 55, 70, 50, 75, 45, 60],
          fill: true,
          cubicInterpolationMode: 'monotone',
          borderWidth: 0,
          borderColor: hij,
          backgroundColor: hij,
          hoverborderColor: hij,
          hoverBackgroundColor: hij,
        }, {
          label: 'D3',
          data: [50, 75, 80, 70, 85, 80, 70],
          fill: false,
          borderWidth: 4,
          borderColor: '#04a9f5',
          backgroundColor: '#04a9f5',
          hoverborderColor: '#04a9f5',
          hoverBackgroundColor: '#04a9f5',
        }]
      };

      this.lineIPMChartOption = {
        barValueSpacing: 20
      };

      /* area basic chart */
      const area_basic_tag = (((<HTMLCanvasElement>this.areaBasicChart.nativeElement).children));
      this.areaBasicChartTag = ((area_basic_tag['area_basic_chart']).lastChild).getContext('2d');
      const bcd = (this.areaBasicChartTag).createLinearGradient(0, 0, 500, 0);
      bcd.addColorStop(0, 'rgba(29, 233, 182, 0.6)');
      bcd.addColorStop(1, 'rgba(29, 196, 233, 0.6)');
      const efg = (this.areaBasicChartTag).createLinearGradient(0, 0, 500, 0);
      efg.addColorStop(0, 'rgba(137, 159, 212, 0.6)');
      efg.addColorStop(1, 'rgba(163, 137, 212, 0.6)');

      this.areaBasicChartData = {
        labels: [0, 1, 2, 3, 4, 5, 6],
        datasets: [{
          label: 'D1',
          data: [45, 60, 45, 80, 60, 80, 45],
          fill: true,
          borderWidth: 4,
          borderColor: bcd,
          backgroundColor: bcd,
          hoverborderColor: bcd,
          hoverBackgroundColor: bcd,
        }, {
          label: 'D2',
          data: [45, 80, 45, 45, 60, 45, 80],
          fill: true,
          cubicInterpolationMode: 'monotone',
          borderWidth: 0,
          borderColor: 'rgba(4, 169, 245, 0.6)',
          backgroundColor: 'rgba(4, 169, 245, 0.6)',
          hoverborderColor: 'rgba(4, 169, 245, 0.6)',
          hoverBackgroundColor: 'rgba(4, 169, 245, 0.6)',
        }, {
          label: 'D3',
          data: [83, 45, 60, 45, 45, 55, 45],
          fill: true,
          borderWidth: 4,
          borderColor: efg,
          backgroundColor: efg,
          hoverborderColor: efg,
          hoverBackgroundColor: efg,
        }]
      };

      this.areaBasicChartOption = {
        barValueSpacing: 20
      };

      /* area fill origin chart */
      const area_fill_origin_tag = (((<HTMLCanvasElement>this.areaFillOriginChart.nativeElement).children));
      this.areaFillOriginChartTag = ((area_fill_origin_tag['area_fill_origin_chart']).lastChild).getContext('2d');
      const bcde = (this.areaFillOriginChartTag).createLinearGradient(0, 0, 500, 0);
      bcde.addColorStop(0, 'rgba(29, 233, 182, 0.6)');
      bcde.addColorStop(1, 'rgba(29, 196, 233, 0.6)');

      this.areaFillOriginChartData = {
        labels: [0, 1, 2, 3, 4, 5, 6],
        datasets: [{
          label: 'D1',
          data: [85, 55, 70, 50, 75, 45, 60],
          borderWidth: 1,
          borderColor: bcde,
          backgroundColor: bcde,
          hoverborderColor: bcde,
          hoverBackgroundColor: bcde,
          fill: 'origin',
        }]
      };

      /* area fill end chart */
      const area_fill_end_tag = (((<HTMLCanvasElement>this.areaFillEndChart.nativeElement).children));
      this.areaFillEndChartTag = ((area_fill_end_tag['area_fill_end_chart']).lastChild).getContext('2d');
      const cde = (this.areaFillEndChartTag).createLinearGradient(0, 0, 500, 0);
      cde.addColorStop(0, 'rgba(137, 159, 212, 0.8)');
      cde.addColorStop(1, 'rgba(163, 137, 212, 0.8)');

      this.areaFillEndChartData = {
        labels: [0, 1, 2, 3, 4, 5, 6],
        datasets: [{
          label: 'D1',
          data: [85, 55, 70, 50, 75, 45, 60],
          borderWidth: 1,
          borderColor: cde,
          backgroundColor: cde,
          hoverborderColor: cde,
          hoverBackgroundColor: cde,
          fill: 'end',
        }]
      };

      /* area radar1 cart */
      const area_radar1_tag = (((<HTMLCanvasElement>this.areaRadar1Chart.nativeElement).children));
      this.areaRadar1ChartTag = ((area_radar1_tag['area_radar1_chart']).lastChild).getContext('2d');
      const pqr = (this.areaRadar1ChartTag).createLinearGradient(0, 0, 350, 0);
      pqr.addColorStop(0, 'rgba(29, 233, 182, 0.9)');
      pqr.addColorStop(1, 'rgba(29, 196, 233, 0.9)');
      const stu = (this.areaRadar1ChartTag).createLinearGradient(0, 0, 350, 0);
      stu.addColorStop(0, 'rgba(137, 159, 212, 0.9)');
      stu.addColorStop(1, 'rgba(163, 137, 212, 0.9)');

      this.areaRadar1ChartData = {
        labels: [0, 1, 2, 3, 4, 5, 6],
        datasets: [{
          label: 'D1',
          data: [60, 60, 45, 80, 60, 80, 45],
          fill: true,
          borderWidth: 4,
          borderColor: pqr,
          backgroundColor: pqr,
          hoverborderColor: pqr,
          hoverBackgroundColor: pqr,
        }, {
          label: 'D2',
          data: [40, 80, 40, 65, 60, 50, 95],
          fill: true,
          cubicInterpolationMode: 'monotone',
          borderWidth: 0,
          borderColor: 'rgba(4, 169, 245, 0.9)',
          backgroundColor: 'rgba(4, 169, 245, 0.9)',
          hoverborderColor: 'rgba(4, 169, 245, 0.9)',
          hoverBackgroundColor: 'rgba(4, 169, 245, 0.9)',
        }, {
          label: 'D3',
          data: [20, 40, 80, 60, 85, 60, 20],
          fill: true,
          borderWidth: 4,
          borderColor: stu,
          backgroundColor: stu,
          hoverborderColor: stu,
          hoverBackgroundColor: stu,
        }]
      };

      /* area radar2 cart */
      const area_radar2_tag = (((<HTMLCanvasElement>this.areaRadar2Chart.nativeElement).children));
      this.areaRadar2ChartTag = ((area_radar2_tag['area_radar2_chart']).lastChild).getContext('2d');
      const pqrs = (this.areaRadar2ChartTag).createLinearGradient(0, 0, 350, 0);
      pqrs.addColorStop(0, 'rgba(29, 233, 182, 0.4)');
      pqrs.addColorStop(1, 'rgba(29, 196, 233, 0.4)');
      const stuv = (this.areaRadar2ChartTag).createLinearGradient(0, 0, 350, 0);
      stuv.addColorStop(0, 'rgba(137, 159, 212, 0.4)');
      stuv.addColorStop(1, 'rgba(163, 137, 212, 0.4)');

      this.areaRadar2ChartData = {
        labels: [0, 1, 2, 3, 4, 5, 6],
        datasets: [{
          label: 'D1',
          data: [60, 60, 45, 80, 60, 80, 45],
          fill: true,
          borderWidth: 4,
          borderColor: pqrs,
          backgroundColor: pqrs,
          hoverborderColor: pqrs,
          hoverBackgroundColor: pqrs,
        }, {
          label: 'D2',
          data: [40, 80, 40, 65, 60, 50, 95],
          fill: true,
          cubicInterpolationMode: 'monotone',
          borderWidth: 0,
          borderColor: 'rgba(4, 169, 245, 0.4)',
          backgroundColor: 'rgba(4, 169, 245, 0.4)',
          hoverborderColor: 'rgba(4, 169, 245, 0.4)',
          hoverBackgroundColor: 'rgba(4, 169, 245, 0.4)',
        }, {
          label: 'D3',
          data: [20, 40, 80, 60, 85, 60, 20],
          fill: true,
          borderWidth: 4,
          borderColor: stuv,
          backgroundColor: stuv,
          hoverborderColor: stuv,
          hoverBackgroundColor: stuv,
        }]
      };

      /* area radar3 cart */
      const area_radar3_tag = (((<HTMLCanvasElement>this.areaRadar3Chart.nativeElement).children));
      this.areaRadar3ChartTag = ((area_radar3_tag['area_radar3_chart']).lastChild).getContext('2d');
      const xyz = (this.areaRadar3ChartTag).createLinearGradient(0, 0, 350, 0);
      xyz.addColorStop(0, 'rgb(29, 233, 182)');
      xyz.addColorStop(1, 'rgb(29, 196, 233)');
      const wxy = (this.areaRadar3ChartTag).createLinearGradient(0, 0, 350, 0);
      wxy.addColorStop(0, 'rgb(137, 159, 212)');
      wxy.addColorStop(1, 'rgb(163, 137, 212)');

      this.areaRadar3ChartData = {
        labels: [0, 1, 2, 3, 4, 5, 6],
        datasets: [{
          label: 'D1',
          data: [60, 60, 45, 80, 60, 80, 45],
          fill: true,
          borderWidth: 4,
          borderColor: xyz,
          backgroundColor: 'transparent',
          hoverborderColor: xyz,
          hoverBackgroundColor: 'transparent',
        }, {
          label: 'D2',
          data: [40, 80, 40, 65, 60, 50, 95],
          fill: true,
          cubicInterpolationMode: 'monotone',
          borderWidth: 0,
          borderColor: 'rgb(4, 169, 245)',
          backgroundColor: 'transparent',
          hoverborderColor: 'rgb(4, 169, 245)',
          hoverBackgroundColor: 'transparent',
        }, {
          label: 'D3',
          data: [20, 40, 80, 60, 85, 60, 20],
          fill: true,
          borderWidth: 4,
          borderColor: wxy,
          backgroundColor: 'transparent',
          hoverborderColor: wxy,
          hoverBackgroundColor: 'transparent',
        }]
      };

      /* pie cart */
      const pie_tag = (((<HTMLCanvasElement>this.pieChart.nativeElement).children));
      this.pieChartTag = ((pie_tag['pie_chart']).lastChild).getContext('2d'); // doughnut_chart
      const cdef = (this.pieChartTag).createLinearGradient(100, 0, 300, 0);
      cdef.addColorStop(0, 'rgba(29, 233, 182, 0.9)');
      cdef.addColorStop(1, 'rgba(29, 196, 233, 0.9)');
      const wxyz = (this.pieChartTag).createLinearGradient(100, 0, 300, 0);
      wxyz.addColorStop(0, 'rgba(137, 159, 212, 0.9)');
      wxyz.addColorStop(1, 'rgba(163, 137, 212, 0.9)');

      this.pieChartData = {
        labels: ['Data 1', 'Data 2', 'Data 3'],
        datasets: [{
          data: [30, 30, 40],
          backgroundColor: [cdef, wxyz, '#04a9f5'],
          hoverBackgroundColor: [cdef, wxyz, '#04a9f5']
        }]
      };
    }, 500);
  }

}

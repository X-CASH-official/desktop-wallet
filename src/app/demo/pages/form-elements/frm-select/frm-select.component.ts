import {Component, OnDestroy, OnInit} from '@angular/core';
import {IOption} from 'ng-select';
import {DualListComponent} from 'angular-dual-listbox';
import {SelectOptionService} from '../../../../theme/shared/components/select/select-option.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-frm-select',
  templateUrl: './frm-select.component.html',
  styleUrls: [
    './frm-select.component.scss',
    '../../../../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css'
  ]
})
export class FrmSelectComponent implements OnInit, OnDestroy {
  tab = 1;
  keepSorted = true;
  key: string;
  display: any;
  filter = false;
  source: Array<any>;
  confirmed: Array<any>;
  userAdd = '';
  disabled = false;

  sourceLeft = true;
  format: any = DualListComponent.DEFAULT_FORMAT;

  private sourceTube: Array<string>;
  private sourceStations: Array<any>;
  private sourceChessmen: Array<any>;

  private confirmedTube: Array<string>;
  private confirmedStations: Array<any>;
  private confirmedChessmen: Array<any>;

  arrayType = [
    { name: 'Rio Grande', detail: '(object array)', value: 'station' },
    { name: 'Chessmen', detail: '(object array)', value: 'chess' },
    { name: 'Underground', detail: '(string array)', value: 'tube' }
  ];

  type = this.arrayType[0].value;

  private stations: Array<any> = [
    { key: 1, station: 'Antonito', state: 'CO' },
    { key: 2, station: 'Big Horn', state: 'NM' },
    { key: 3, station: 'Sublette', state: 'NM' },
    { key: 4, station: 'Toltec', state: 'NM' },
    { key: 5, station: 'Osier', state: 'CO' },
    { key: 6, station: 'Chama', state: 'NM'},
    { key: 7, station: 'Monero', state: 'NM' },
    { key: 8, station: 'Lumberton', state: 'NM' },
    { key: 9, station: 'Duice', state: 'NM' },
    { key: 10, station: 'Navajo', state: 'NM' },
    { key: 11, station: 'Juanita', state: 'CO' },
    { key: 12, station: 'Pagosa Jct', state: 'CO' },
    { key: 13, station: 'Carracha', state: 'CO' },
    { key: 14, station: 'Arboles', state: 'CO' },
    { key: 15, station: 'Solidad', state: 'CO' },
    { key: 16, station: 'Tiffany', state: 'CO' },
    { key: 17, station: 'La Boca', state: 'CO' },
    { key: 18, station: 'Ignacio', state: 'CO' },
    { key: 19, station: 'Oxford', state: 'CO' },
    { key: 20, station: 'Florida', state: 'CO' },
    { key: 21, station: 'Bocea', state: 'CO' },
    { key: 22, station: 'Carbon Jct', state: 'CO' },
    { key: 23, station: 'Durango', state: 'CO' },
    { key: 24, station: 'Home Ranch', state: 'CO' },
    { key: 25, station: 'Trimble Springs', state: 'CO' },
    { key: 26, station: 'Hermosa', state: 'CO' },
    { key: 27, station: 'Rockwood', state: 'CO' },
    { key: 28, station: 'Tacoma', state: 'CO' },
    { key: 29, station: 'Needleton', state: 'CO' },
    { key: 30, station: 'Elk Park', state: 'CO' },
    { key: 31, station: 'Silverton', state: 'CO' },
    { key: 32, station: 'Eureka', state: 'CO' }
  ];

  private chessmen: Array<any> = [
    { _id: 1, name: 'Pawn' },
    { _id: 2, name: 'Rook' },
    { _id: 3, name: 'Knight' },
    { _id: 4, name: 'Bishop' },
    { _id: 5, name: 'Queen' },
    { _id: 6, name: 'King' }
  ];

  private tube: Array<string> = [
    'Harrow & Wealdstone',
    'Kenton',
    'South Kenton',
    'North Wembley',
    'Wembley Central',
    'Stonebridge Park',
    'Harlesden',
    'Willesden Junction',
    'Kensal Green',
    'Queens Park',
    'Kilburn Park',
    'Maida Vale',
    'Warwick Avenue',
    'Paddington',
    'Edgware Road',
    'Marylebone',
    'Baker Street',
    'Regents Park',
    'Oxford Circus',
    'Piccadilly Circus',
    'Charing Cross',
    'Embankment',
    'Waterloo',
    'Lambeth North',
    'Elephant & Castle'
  ];


  simpleOption: Array<IOption> = this.selectOptionService.getCharacters();
  selectedOption = '3';
  isDisabled = true;
  characters: Array<IOption>;
  selectedCharacter = '3';
  timeLeft = 5;

  countries: Array<IOption> = this.selectOptionService.getCountries();
  selectedCountry = 'IN';
  selectedCountries: Array<string> = ['IN', 'BE', 'LU', 'NL'];

  private dataSub: Subscription = null;

  autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];
  autocompleteItemsAsObjects = [
    {value: 'Alabama', id: 0},
    {value: 'Wyoming', id: 1},
    {value: 'Coming', id: 2},
    {value: 'Josephin Doe', id: 3},
    {value: 'Henry Die', id: 4},
    {value: 'Lary Doe', id: 5},
    {value: 'Alice', id: 6},
    {value: 'Alia', id: 7},
    {value: 'Suzen', id: 8},
    {value: 'Michael Scofield', id: 9},
    {value: 'Irina Shayk', id: 10},
    {value: 'Sara Tancredi', id: 11},
    {value: 'Daizy Mendize', id: 12},
    {value: 'Loren Scofield', id: 13},
    {value: 'Shayk', id: 14},
    {value: 'Sara', id: 15},
    {value: 'Doe', id: 16},
    {value: 'Lary', id: 17},
    {value: 'Roni Sommerfield', id: 18},
    {value: 'Mickey Amavisca', id: 19},
    {value: 'Dorethea Hennigan', id: 20},
    {value: 'Marisha Haughey', id: 21},
    {value: 'Justin Czajkowski', id: 22},
    {value: 'Reyes Hodges', id: 23},
    {value: 'Vicky Hadley', id: 24},
    {value: 'Lezlie Baumert', id: 25},
    {value: 'Otha Vanorden', id: 26},
    {value: 'Glayds Inabinet', id: 27},
    {value: 'Hang Owsley', id: 28},
    {value: 'Carlotta Buttner', id: 29},
    {value: 'Randa Vanloan', id: 30},
    {value: 'Elana Fulk', id: 31},
    {value: 'Amos Spearman', id: 32},
    {value: 'Samon', id: 33},
    {value: 'John Doe', id:  34}
  ];

  constructor(public selectOptionService: SelectOptionService) { }

  ngOnInit() {
    this.doReset();

    this.runTimer();
    this.dataSub = this.selectOptionService.loadCharacters().subscribe((options) => {
      this.characters = options;
    });
  }

  ngOnDestroy() {
    if (this.dataSub !== null) { this.dataSub.unsubscribe(); }
  }

  runTimer() {
    const timer = setInterval(() => {
      this.timeLeft -= 1;
      if (this.timeLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  private stationLabel(item: any) {
    return item.station + ', ' + item.state;
  }

  private useStations() {
    this.key = 'key';
    this.display = this.stationLabel;
    this.keepSorted = true;
    this.source = this.sourceStations;
    this.confirmed = this.confirmedStations;
  }

  private useChessmen() {
    this.key = '_id';
    this.display = 'name';
    this.keepSorted = false;
    this.source = this.sourceChessmen;
    this.confirmed = this.confirmedChessmen;
  }

  private useTube() {
    this.key = undefined;
    this.display = undefined;
    this.keepSorted = false;
    this.source = this.sourceTube;
    this.confirmed = this.confirmedTube;
  }

  swapSource() {
    switch (this.type) {
      case this.arrayType[0].value:
        this.useStations();
        break;
      case this.arrayType[1].value:
        this.useChessmen();
        break;
      case this.arrayType[2].value:
        this.useTube();
        break;
    }
  }

  doReset() {
    this.sourceChessmen = JSON.parse(JSON.stringify(this.chessmen));
    this.sourceStations = JSON.parse(JSON.stringify(this.stations));
    this.sourceTube = JSON.parse(JSON.stringify(this.tube));
    this.confirmedChessmen = new Array<any>();
    this.confirmedStations = new Array<any>();
    this.confirmedTube = new Array<string>();

    // Preconfirm some items.
    this.confirmedStations.push( this.stations[31] );
    this.confirmedTube.push( this.tube[13] );
    this.confirmedTube.push( this.tube[23] );

    switch (this.type) {
      case this.arrayType[0].value:
        this.useStations();
        break;
      case this.arrayType[1].value:
        this.useChessmen();
        break;
      case this.arrayType[2].value:
        this.useTube();
        break;
    }
  }

  doDelete() {
    if (this.source.length > 0) {
      this.source.splice(0, 1);
    }
  }

  doCreate() {
    if (typeof this.source[0] === 'object') {
      const o = {};
      o[this.key] = this.source.length + 1;
      o[this.display] = this.userAdd;
      this.source.push( o );
    } else {
      this.source.push(this.userAdd);
    }
    this.userAdd = '';
  }

  doAdd() {
    for (let i = 0, len = this.source.length; i < len; i += 1) {
      const o = this.source[i];
      const found = this.confirmed.find( (e: any) => e === o );
      if (!found) {
        this.confirmed.push(o);
        break;
      }
    }
  }

  doRemove() {
    if (this.confirmed.length > 0) {
      this.confirmed.splice(0, 1);
    }
  }

  doFilter() {
    this.filter = !this.filter;
  }

  filterBtn() {
    return (this.filter ? 'Hide Filter' : 'Show Filter');
  }

  doDisable() {
    this.disabled = !this.disabled;
  }

  disableBtn() {
    return (this.disabled ? 'Enable' : 'Disabled');
  }

  swapDirection() {
    this.sourceLeft = !this.sourceLeft;
    this.format.direction = this.sourceLeft ? DualListComponent.LTR : DualListComponent.RTL;
  }

}

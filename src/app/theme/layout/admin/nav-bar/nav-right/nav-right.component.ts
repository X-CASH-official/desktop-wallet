import {Component, DoCheck, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {animate, style, transition, trigger} from '@angular/animations';
import {DattaConfig} from '../../../../../app-config';
import {ConfigurationComponent} from '../../configuration/configuration.component';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig, ConfigurationComponent],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class NavRightComponent implements OnInit, DoCheck {
  public dattaConfig: any;

  constructor(config: NgbDropdownConfig, private Configuration_Component: ConfigurationComponent) {
    config.placement = 'bottom-right';
    this.dattaConfig = DattaConfig.config;
  }

  ngOnInit() {
  }

  change_theme(data:string)
  {
    this.Configuration_Component.setLayout(data);
  }

  ngDoCheck() {
    if (document.querySelector('body').classList.contains('datta-rtl')) {
      this.dattaConfig['rtl-layout'] = true;
    } else {
      this.dattaConfig['rtl-layout'] = false;
    }
  }
}

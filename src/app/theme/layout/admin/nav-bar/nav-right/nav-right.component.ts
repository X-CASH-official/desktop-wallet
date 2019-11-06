import {Component, DoCheck, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {animate, style, transition, trigger} from '@angular/animations';
import {DattaConfig} from '../../../../../app-config';
import {ConfigurationComponent} from '../../configuration/configuration.component';
import { AuthService } from 'src/app/auth/auth.service';

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
  public darkTheme: boolean = true;

  constructor(config: NgbDropdownConfig, private Configuration_Component: ConfigurationComponent, private authService: AuthService) {
    config.placement = 'bottom-right';
    this.dattaConfig = DattaConfig.config;
  }

  ngOnInit() {
  }

  toggleTheme(darkTheme: boolean) {
    if (darkTheme) {
      this.Configuration_Component.setLayout('dark');
    } else {
      this.Configuration_Component.setLayout('light');
    }
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

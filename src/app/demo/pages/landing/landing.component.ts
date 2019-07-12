import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [
    './landing.component.scss',
    '../../../../assets/landing/css/style.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  openMe = false;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-adv-rating',
  templateUrl: './adv-rating.component.html',
  styleUrls: [
    './adv-rating.component.scss',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-default-theme.css',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-bootstrap-theme.css',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-fontawesome-theme.css',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-fontawesome-o-theme.css',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-horizontal-theme.css',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-vertical-theme.css',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-stars-theme.css',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-movie-theme.css',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-square-theme.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdvRatingComponent implements OnInit {
  public rateDefault = 1;
  public rateFa = 1;
  public rateFao = 5.6;
  public rateMovie = 2;
  public rateHorizontal = 7;
  public rateVertical = 1;
  public rateStar = 5;
  public rateSquare = 2;

  constructor() { }

  ngOnInit() {
  }

}

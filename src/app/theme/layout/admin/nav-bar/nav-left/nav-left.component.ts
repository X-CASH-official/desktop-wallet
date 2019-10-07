import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {
  showBackToHome: boolean;

  constructor(private router:Router) {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // Hard coded value in HTML too
        this.showBackToHome = RegExp('/wallet-homepage/wallet/*').test(router.url);
      }
   });
  }

  ngOnInit() {
  }

}

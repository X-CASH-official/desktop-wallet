import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class dashboardComponent implements OnInit {

  // Variables
  total_xcash:number = 0;

  constructor() { }

  ngOnInit()
  {
    
  }
}
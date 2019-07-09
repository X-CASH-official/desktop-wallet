import { Component, OnInit } from '@angular/core';
import {variables_and_functions_service} from '../../../services/variables_and_functions.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class dashboardComponent implements OnInit {

  // Variables
  total_xcash:number = 0;
  total_unlocked_balance:number = 0;

  constructor(private variables_and_functions_service: variables_and_functions_service) { }

  async ngOnInit()
  {
    // Variables
    let data:string;
    
    data = await this.variables_and_functions_service.send_post_request(this.variables_and_functions_service.get_balance);
    console.log(data);
  }
}
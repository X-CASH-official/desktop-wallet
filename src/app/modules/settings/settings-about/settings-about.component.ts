import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-about',
  templateUrl: './settings-about.component.html',
  styleUrls: ['./settings-about.component.scss']
})
export class SettingsAboutComponent implements OnInit {
  public version: string = '0.0.0';

  constructor() { }

  ngOnInit() {
  }

}

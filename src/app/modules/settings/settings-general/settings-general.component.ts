import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-general',
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss']
})
export class SettingsGeneralComponent implements OnInit {
  public version: string = '0.0.0';

  durationToInactivity: string = "never";

  constructor() { }

  ngOnInit() {
  }

  onInactivityDurationSelect(duration: string): void {
    this.durationToInactivity = duration;
  }

}

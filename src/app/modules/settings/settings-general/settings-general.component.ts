import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-settings-general',
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss']
})
export class SettingsGeneralComponent implements OnInit {
  public version: string = '0.0.0';

  durationToInactivity: string = "never";

  constructor(private DatabaseService: DatabaseService) { }

  async ngOnInit()
  {
    let data:string = (await this.DatabaseService.getAutoLock()).toString();
    data = `${data} minutes`;
    if (data === "1 minutes")
    {
      data = "1 minute";
    }
    if (data === "60 minutes")
    {
      data = "1 hour";
    }
    if (data === "0 minutes")
    {
      data = "never";
    }
    this.onInactivityDurationSelect(data);
  }

  onInactivityDurationSelect(duration: string): void {
    this.durationToInactivity = duration;
  }

  async updateautolock(settings:number)
  {
    await this.DatabaseService.updateAutoLock(settings);
  }

}

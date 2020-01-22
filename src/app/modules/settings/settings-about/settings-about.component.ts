import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-about',
  templateUrl: './settings-about.component.html',
  styleUrls: ['./settings-about.component.scss']
})
export class SettingsAboutComponent implements OnInit {
  public version: string = '0.1.0';
  update_settings:string = "";

  constructor() { }

  ngOnInit() {
    this.get_update();
  }

  async get_update()
  {
    try
    {
      let data = await this.check_update();
      this.update_settings = data.tag_name !== this.version ? `Update available: ${data.tag_name} Current version: ${this.version}` : "There is no update at this time";
    }
    catch(error)
    {
      
    }
  }

  check_update(): Promise<any>
  {
     return new Promise(async(resolve, reject) => {
       const URL:string = "";
        fetch(URL)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(error => reject(error));
      });
  }

}

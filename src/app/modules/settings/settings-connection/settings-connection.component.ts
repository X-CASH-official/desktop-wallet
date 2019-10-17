import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-settings-connection',
  templateUrl: './settings-connection.component.html',
  styleUrls: ['./settings-connection.component.scss']
})
export class SettingsConnectionComponent implements OnInit {

  blockHeight: number = 4223210;

  remoteNodes: object[] = [
    {
      name: 'USSEED.XCASH.ORG',
      port: '18880',
    },
    {
      name: 'PIZ.XCASH.ORG',
      port: '18273',
    },
    {
      name: 'TARBA.XCASH.ORG',
      port: '19283',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-settings-connection',
  templateUrl: './settings-connection.component.html',
  styleUrls: ['./settings-connection.component.scss']
})
export class SettingsConnectionComponent implements OnInit {

  @ViewChild('custom_remote_node', {static: true}) custom_remote_node: ElementRef;

  blockHeight: number = 4223210;
  remoteNode:string = "USSEED1.X-CASH.ORG:18280";

  onChange($event){
    this.remoteNode = $event.target.options[$event.target.options.selectedIndex].text;
    this.custom_remote_node.nativeElement.value = "";
    }

  async ngOnDestroy()
  {
    // overwrite the selection if they specifed a custom node
    this.remoteNode = this.custom_remote_node.nativeElement.value != "" ? this.custom_remote_node.nativeElement.value : this.remoteNode;
    this.remoteNode = this.remoteNode === "Custom node" ? "USSEED1.X-CASH.ORG:18280" : this.remoteNode;
    // save the remote node connection
    await this.DatabaseService.updateRemoteNode(this.remoteNode);
  }

  constructor(private DatabaseService: DatabaseService) { }

  ngOnInit()
  {

  }

  async ngAfterViewInit() {
    // load the current remote node
    this.remoteNode = await this.DatabaseService.getRemoteNode();
    if (this.remoteNode !== "USSEED1.X-CASH.ORG:18280" && this.remoteNode !== "USSEED2.X-CASH.ORG:18280" && this.remoteNode !== "EUSEED1.X-CASH.ORG:18280" && this.remoteNode !== "EUSEED3.X-CASH.ORG:18280" && this.remoteNode !== "ASIASEED2.X-CASH.ORG:18280")
    {
      this.custom_remote_node.nativeElement.value = this.remoteNode;
    }
  }

}

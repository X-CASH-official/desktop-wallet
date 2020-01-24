import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-settings-connection',
  templateUrl: './settings-connection.component.html',
  styleUrls: ['./settings-connection.component.scss']
})
export class SettingsConnectionComponent implements OnInit {

  constructor(private RpcCallsService: RpcCallsService, private DatabaseService: DatabaseService) { }

  @ViewChild('custom_remote_node', {static: true}) custom_remote_node: ElementRef;

  blockHeight: number = 4223210;
  remoteNode:string = "USSEED1.X-CASH.ORG:18281";
  best_node_settings:any[] = [];

    async updateremotenode(settings:string)
    {
      this.remoteNode = settings;
      this.RpcCallsService.Remote_Node = settings; 
      this.custom_remote_node.nativeElement.value = "";
    }

    best_remote_node(remote_node:string): Promise<any>
    {
      return new Promise(async(resolve, reject) => {
        let start = performance.now();
        fetch(`http://${remote_node}:18281`)
        .then(res => {
          this.best_node_settings.push({"remote_node":`${remote_node}:18281`,"time":performance.now()-start});
          resolve();
        })
        .catch(error => {
           this.best_node_settings.push({"remote_node":`${remote_node}:18281`,"time":"1000000"});
           resolve();
        });
      });
    }

    async get_best_remote_node()
    {
      await Promise.all([
        this.best_remote_node("USSEED1.X-CASH.ORG"),
        this.best_remote_node("USSEED2.X-CASH.ORG"),
        this.best_remote_node("EUSEED1.X-CASH.ORG"),
        this.best_remote_node("EUSEED3.X-CASH.ORG"),
        this.best_remote_node("ASIASEED2.X-CASH.ORG")
      ]);

       this.best_node_settings.sort((a,b)=>a.item-b.item);
       this.remoteNode = this.best_node_settings[0].remote_node;
       this.RpcCallsService.Remote_Node = this.remoteNode; 
       this.custom_remote_node.nativeElement.value = "";
    }

  async ngOnDestroy()
  {
    // overwrite the selection if they specifed a custom node
    this.remoteNode = this.custom_remote_node.nativeElement.value != "" ? this.custom_remote_node.nativeElement.value : this.remoteNode;
    this.remoteNode = this.remoteNode === "Custom node" ? "USSEED1.X-CASH.ORG:18281" : this.remoteNode;
    this.RpcCallsService.Remote_Node = this.remoteNode; 
    // save the remote node connection
    await this.DatabaseService.updateRemoteNode(this.remoteNode);
  }

  ngOnInit()
  {

  }

  async ngAfterViewInit() {
    // load the current remote node
    this.remoteNode = await this.DatabaseService.getRemoteNode();
    this.RpcCallsService.Remote_Node = this.remoteNode; 
    if (this.remoteNode !== "USSEED1.X-CASH.ORG:18281" && this.remoteNode !== "USSEED2.X-CASH.ORG:18281" && this.remoteNode !== "EUSEED1.X-CASH.ORG:18281" && this.remoteNode !== "EUSEED3.X-CASH.ORG:18281" && this.remoteNode !== "ASIASEED2.X-CASH.ORG:18281")
    {
      this.custom_remote_node.nativeElement.value = this.remoteNode;
    }
  }

}

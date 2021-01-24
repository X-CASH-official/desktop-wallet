import { Component, OnInit, ViewChild } from '@angular/core';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';

@Component({
  selector: 'app-xcashdpops',
  templateUrl: './xcashdpops.component.html',
  styleUrls: ['./xcashdpops.component.scss']
})
export class XcashdpopsComponent implements OnInit {
  @ViewChild('VoteSuccessModal', { static: true }) VoteSuccessModal: any;
  @ViewChild('VoteFailModal', { static: true }) VoteFailModal: any;
  @ViewChild('VoteWaitModal', { static: true }) VoteWaitModal: any;
  @ViewChild('DelegateWaitModal', { static: true }) DelegateWaitModal: any;
  @ViewChild('SweepAllVoteModal', { static: true }) SweepAllVoteModal: any;

  constructor(private RpcCallsService: RpcCallsService) { }

  ngOnInit() {
  }

  async onNewVote(newVote: Event) {
    try
    {
    this.VoteWaitModal.show();
    let data = await this.RpcCallsService.delegate_vote(newVote);
    if (data === "success")
    {
      this.VoteWaitModal.hide();
      this.VoteSuccessModal.show();
    }
    else
    {
      this.VoteWaitModal.hide();
      this.VoteFailModal.show();
    }
    }
    catch(error)
    {
      this.VoteWaitModal.hide();
      this.VoteFailModal.show();
    }
  }

  async onNewRegister(newRegister: Event) {
    try
    {
    this.DelegateWaitModal.show();
    let data = await this.RpcCallsService.delegate_register(newRegister);
    if (data === "success")
    {
      this.DelegateWaitModal.hide();
      this.VoteSuccessModal.show();
    }
    else
    {
      this.DelegateWaitModal.hide();
      this.VoteFailModal.show();
    }
    }
    catch(error)
    {
      this.DelegateWaitModal.hide();
      this.VoteFailModal.show();
    }
  }

  async onNewUpdate(newUpdate: Event) {
    try
    {
    this.DelegateWaitModal.show();
    let data = await this.RpcCallsService.delegate_update(newUpdate);
    if (data === "success")
    {
      this.DelegateWaitModal.hide();
      this.VoteSuccessModal.show();
    }
    else
    {
      this.DelegateWaitModal.hide();
      this.VoteFailModal.show();
    }
    }
    catch(error)
    {
      this.DelegateWaitModal.hide();
      this.VoteFailModal.show();
    }
  }

  async onNewRecover(newRecover: Event) {
    try
    {
    this.DelegateWaitModal.show();
    let data = await this.RpcCallsService.delegate_recover(newRecover);
    if (data === "success")
    {
      this.DelegateWaitModal.hide();
      this.VoteSuccessModal.show();
    }
    else
    {
      this.DelegateWaitModal.hide();
      this.VoteFailModal.show();
    }
    }
    catch(error)
    {
      this.DelegateWaitModal.hide();
      this.VoteFailModal.show();
    }
  }

async vote_sweep_all()
  {
    await this.RpcCallsService.sweep_all_vote();
    this.SweepAllVoteModal.hide(); 
  }

}

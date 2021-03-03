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
  @ViewChild('VoteStatusModal', { static: true }) VoteStatusModal: any;

  currently_voted_for_delegate:string = "Vote Status";

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

async get_vote_status()
  {
    try
    {
      let data = await this.RpcCallsService.check_vote_status();
      console.log(data);
      this.currently_voted_for_delegate = "Currently Voted for: " + data;
    }
    catch(error)
    {
      this.currently_voted_for_delegate = "You have not voted for a delegate yet";
    }
  }

async revote()
  {
    try
    {
    this.VoteWaitModal.show();
    let data = await this.RpcCallsService.revote();
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

}

import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-wallet-staking',
  templateUrl: './wallet-staking.component.html',
  styleUrls: ['./wallet-staking.component.scss']
})
export class WalletStakingComponent implements OnInit {

  @ViewChild('VoteSuccessModal', { static: true }) VoteSuccessModal: any;
  @ViewChild('VoteFailModal', { static: true }) VoteFailModal: any;
  @ViewChild('VoteWaitModal', { static: true }) VoteWaitModal: any;
  @ViewChild('DelegateWaitModal', { static: true }) DelegateWaitModal: any;
  @ViewChild('SweepAllVoteModal', { static: true }) SweepAllVoteModal: any;
  @ViewChild('VoteStatusModal', { static: true }) VoteStatusModal: any;
  
  constructor(private validatorRegexService: ValidatorsRegexService, private RpcCallsService: RpcCallsService, private DatabaseService: DatabaseService) { }

  currently_voted_for_delegate:string = "Loading, please wait";
  progress: number = 0;
  
  ngOnInit() {  
    this.get_vote_status();
  }

  async concat_tx()
  {
    setInterval(() => this.progress++, 9000);
    await this.RpcCallsService.sweep_all_vote();
    this.SweepAllVoteModal.hide(); 
  }

  async vote(delegate:string) {
    try
    {
    this.VoteWaitModal.show();
    let data = await this.RpcCallsService.delegate_vote(delegate);
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

  async get_vote_status()
  {
    try
    {
      this.currently_voted_for_delegate = await this.RpcCallsService.check_vote_status();
    }
    catch(error)
    {
      this.currently_voted_for_delegate = "This wallet has not staked to a delegate yet";
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

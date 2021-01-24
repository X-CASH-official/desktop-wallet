import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';

@Component({
  selector: 'app-vote-modal',
  templateUrl: './vote-modal.component.html',
  styleUrls: ['./vote-modal.component.scss']
})
export class VoteComponent implements OnInit {

  @Output() newVoteEvent = new EventEmitter();

  @ViewChild('VoteModal', { static: true }) VoteModal: any;

  VoteForm = new FormGroup({
    delegateName: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.delegate_name)]),
  });

  constructor(private validatorRegexService: ValidatorsRegexService) { }

  ngOnInit() {
  }

  get delegateName() {
    return this.VoteForm.get('delegateName');
  }

  onSubmit() {
    if (this.VoteForm.valid) {
      this.VoteModal.hide();
      this.newVoteEvent.emit(this.VoteForm.value);
      this.VoteForm.reset();
    } else {
      this.delegateName.markAsTouched();
    }
  }

  show() {
    this.VoteModal.show();
  }

}

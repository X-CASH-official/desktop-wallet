import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';

@Component({
  selector: 'app-recover-modal',
  templateUrl: './recover-modal.component.html',
  styleUrls: ['./recover-modal.component.scss']
})
export class RecoverComponent implements OnInit {

  @Output() newRecoverEvent = new EventEmitter();

  @ViewChild('RecoverModal', { static: true }) RecoverModal: any;

  RecoverForm = new FormGroup({
    domainName: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.delegate_name)]),
  });

  constructor(private validatorRegexService: ValidatorsRegexService) { }

  ngOnInit() {
  }

  get domainName() {
    return this.RecoverForm.get('domainName');
  }

  onSubmit() {
    if (this.RecoverForm.valid) {
      this.RecoverModal.hide();
      this.newRecoverEvent.emit(this.RecoverForm.value);
      this.RecoverForm.reset();
    } else {
      this.domainName.markAsTouched();
    }
  }

  show() {
    this.RecoverModal.show();
  }

}

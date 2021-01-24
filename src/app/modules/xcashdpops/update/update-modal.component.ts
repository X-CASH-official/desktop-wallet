import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorsRegexService } from 'src/app/services/validators-regex.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateComponent implements OnInit {

  @Output() newUpdateEvent = new EventEmitter();

  @ViewChild('UpdateModal', { static: true }) UpdateModal: any;

  UpdateForm = new FormGroup({
    delegateItem: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.delegate_item)]),
    delegateValue: new FormControl('', [Validators.required, Validators.pattern(this.validatorRegexService.delegate_name)]),
  });

  constructor(private validatorRegexService: ValidatorsRegexService) { }

  ngOnInit() {
  }

  get delegateItem() {
    return this.UpdateForm.get('delegateItem');
  }

  get delegateValue() {
    return this.UpdateForm.get('delegateValue');
  }

  onSubmit() {
    if (this.UpdateForm.valid) {
      this.UpdateModal.hide();
      this.newUpdateEvent.emit(this.UpdateForm.value);
      this.UpdateForm.reset();
    } else {
      this.delegateItem.markAsTouched();
      this.delegateValue.markAsTouched();
    }
  }

  show() {
    this.UpdateModal.show();
  }

}

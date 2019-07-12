import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import { FileUploadValidators } from '@iplab/ngx-file-upload';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilesUploadComponent implements OnInit {
  private filesControl = new FormControl(null, FileUploadValidators.filesLimit(2));

  public demoForm = new FormGroup({
    files: this.filesControl
  });

  constructor() { }

  ngOnInit() {
  }

  public toggleStatus() {
    this.filesControl.disabled ? this.filesControl.enable() : this.filesControl.disable();
  }

}

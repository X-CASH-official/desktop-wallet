import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesUploadRoutingModule } from './files-upload-routing.module';
import { FilesUploadComponent } from './files-upload.component';
import {SharedModule} from '../../../theme/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FileUploadModule } from '@iplab/ngx-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FilesUploadRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule
  ],
  declarations: [FilesUploadComponent]
})
export class FilesUploadModule { }

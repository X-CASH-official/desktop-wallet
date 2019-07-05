import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PellWysiwygRoutingModule } from './pell-wysiwyg-routing.module';
import { PellWysiwygComponent } from './pell-wysiwyg.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {PellModule} from 'angular-pell';
import {TinymceModule} from 'angular2-tinymce';

@NgModule({
  imports: [
    CommonModule,
    PellWysiwygRoutingModule,
    SharedModule,
    PellModule
  ],
  declarations: [PellWysiwygComponent]
})
export class PellWysiwygModule { }

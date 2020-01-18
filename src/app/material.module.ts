import {NgModule} from '@angular/core';

import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/';
import {MatProgressSpinnerModule} from '@angular/material/';
import {MatMenuModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatTableModule} from '@angular/material';


@NgModule({
  exports: [    
    MatSortModule,
    MatTableModule,
  ]
})
export class MaterialModule {}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
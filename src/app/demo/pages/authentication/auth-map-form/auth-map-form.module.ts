import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthMapFormRoutingModule } from './auth-map-form-routing.module';
import { AuthMapFormComponent } from './auth-map-form.component';
import { AgmCoreModule } from '@agm/core';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthMapFormRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'})
  ],
  declarations: [AuthMapFormComponent]
})
export class AuthMapFormModule { }

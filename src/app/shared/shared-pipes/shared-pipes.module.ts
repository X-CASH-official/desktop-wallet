import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XcashCurrencyPipe } from 'src/app/pipes/xcash-currency.pipe';

@NgModule({
  declarations: [
    XcashCurrencyPipe,
  ],
  imports: [
  ],
  exports: [
    XcashCurrencyPipe,
  ]
})
export class SharedPipesModule { }

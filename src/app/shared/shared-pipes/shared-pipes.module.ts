import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XcashCurrencyPipe } from 'src/app/pipes/xcash-currency.pipe';
import { XcashPublicAddressPipe } from 'src/app/pipes/xcash-public-address.pipe';

@NgModule({
  declarations: [
    XcashCurrencyPipe,
    XcashPublicAddressPipe,
  ],
  imports: [
  ],
  exports: [
    XcashCurrencyPipe,
    XcashPublicAddressPipe,
  ]
})
export class SharedPipesModule { }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  readonly xcash_public_address_prefix:string = "XCA";
  readonly xcash_integrated_address_prefix:string = "XCB";
  readonly xcash_sub_address_prefix:string = "8";
  readonly xcash_public_address_length:number = 98;
  readonly xcash_integrated_address_length:number = 110;
  readonly xcash_sub_address_length:number = 95;
  readonly xcash_public_address_length_settings:number = this.xcash_public_address_length - this.xcash_public_address_prefix.length;
  readonly xcash_integrated_address_length_settings:number = this.xcash_integrated_address_length - this.xcash_integrated_address_prefix.length;
  readonly xcash_sub_address_length_settings:number = this.xcash_sub_address_length - this.xcash_sub_address_prefix.length;
  readonly xcash_total_supply = 100000000000;
  
  readonly private_key_length:number = 64;
  readonly mnemonic_seed_word_length:number = 25;
  readonly unencrypted_payment_id_length:number = 64;
  readonly encrypted_payment_id_length:number = 16;
  readonly signature_prefix:string = "SigV1";
  readonly signature_length:number = 93;
  readonly signature_length_settings:number = this.signature_length - this.signature_prefix.length;
  readonly text_settings_length:number = 30;
}

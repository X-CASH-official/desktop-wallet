import {Injectable} from '@angular/core';

@Injectable()
export class variables_and_functions_service{
constructor() { }

// Variables
xcash_public_address_prefix:string = "XCA";
xcash_integrated_address_prefix:string = "XCB";
xcash_sub_address_prefix:string = "8";
xcash_public_address_length:number = 98;
xcash_integrated_address_length:number = 110;
xcash_sub_address_length:number = 95;
xcash_public_address_length_settings:number = this.xcash_public_address_length - this.xcash_public_address_prefix.length;
xcash_integrated_address_length_settings:number = this.xcash_integrated_address_length - this.xcash_integrated_address_prefix.length;
xcash_sub_address_length_settings:number = this.xcash_sub_address_length - this.xcash_sub_address_prefix.length;

private_key_length:number = 64;
mnemonic_seed_word_length:number = 25;
unencrypted_payment_id_length:number = 64;
encrypted_payment_id_length:number = 16;

text_settings_length:number = 30;

xcash_address:RegExp = new RegExp(`^(${this.xcash_public_address_prefix}[a-zA-Z0-9]{${this.xcash_public_address_length_settings}}|${this.xcash_integrated_address_prefix}[a-zA-Z0-9]{${this.xcash_integrated_address_length_settings}}|${this.xcash_sub_address_prefix}[a-zA-Z0-9]{${this.xcash_sub_address_length_settings}})$`);
payment_id:RegExp = new RegExp(`^([0-9a-f]{${this.unencrypted_payment_id_length}}|[0-9a-f]{${this.encrypted_payment_id_length}}|)$`);
mnemonic_seed_or_private_key:RegExp = new RegExp(`^((?:\\b[a-z]+\\b[ ]*){${this.mnemonic_seed_word_length}}|(?:[0-9a-f]{${this.private_key_length}}))$`);
private_key = new RegExp(`^(?:[0-9a-f]{${this.private_key_length}})$`);
text_settings = new RegExp("^[a-zA-Z0-9]*$");
}
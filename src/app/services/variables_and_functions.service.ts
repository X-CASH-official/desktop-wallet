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

unencrypted_payment_id_length:number = 64;
encrypted_payment_id_length:number = 16;

data_length:number = 30;

xcash_address:RegExp = new RegExp(`^(${this.xcash_public_address_prefix}[a-zA-Z0-9]{${this.xcash_public_address_length_settings}}|${this.xcash_integrated_address_prefix}[a-zA-Z0-9]{${this.xcash_integrated_address_length_settings}}|${this.xcash_sub_address_prefix}[a-zA-Z0-9]{${this.xcash_sub_address_length_settings}})$`);
payment_id:RegExp = new RegExp(`^([0-9a-f]{${this.unencrypted_payment_id_length}}|[0-9a-f]{${this.encrypted_payment_id_length}}|)$`);

}

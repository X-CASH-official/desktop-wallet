import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsRegexService {
  
  constructor(private constantsService: ConstantsService) { }
  
  xcash_address:RegExp = new RegExp(`^(${this.constantsService.xcash_public_address_prefix}[a-zA-Z0-9]{${this.constantsService.xcash_public_address_length_settings}}|${this.constantsService.xcash_integrated_address_prefix}[a-zA-Z0-9]{${this.constantsService.xcash_integrated_address_length_settings}}|${this.constantsService.xcash_sub_address_prefix}[a-zA-Z0-9]{${this.constantsService.xcash_sub_address_length_settings}})$`);
  
  mnemonic_seed_or_private_key:RegExp = new RegExp(`^((?:\\b[a-z]+\\b[ ]*){${this.constantsService.mnemonic_seed_word_length}}|(?:[0-9a-f]{${this.constantsService.private_key_length}}))$`);

  mnemonic_seed:RegExp = new RegExp(`^(\\b[a-z]+\\b[ ]*){${this.constantsService.mnemonic_seed_word_length}}`)
  
  private_key:RegExp = new RegExp(`^([0-9a-f]{${this.constantsService.private_key_length}})$`);
  
  payment_id:RegExp = new RegExp(`^([0-9a-f]{${this.constantsService.unencrypted_payment_id_length}}|[0-9a-f]{${this.constantsService.encrypted_payment_id_length}}|)$`);
  
  encrypted_payment_id:RegExp = new RegExp(`^([0-9a-f]{${this.constantsService.encrypted_payment_id_length}}|)$`);
  
  xcash_amount:RegExp = new RegExp(`\\b(^[0-9]{1,11}.[0-9]{0,5}[1-9]{1}$|^[1-9]{1}[0-9]{0,10}$|${this.constantsService.xcash_total_supply})\\b$`);
  
  xcash_reserve_proof_amount:RegExp = new RegExp(`\\b(^[0-9]{1,11}.[0-9]{0,5}[1-9]{1}$|^[1-9]{1}[0-9]{0,10}$|${this.constantsService.xcash_total_supply}|^ALL$)\\b$`);
  
  reserve_proof:RegExp = new RegExp("^ReserveProofV1[a-zA-Z0-9]+$");
  
  signature:RegExp = new RegExp(`^${this.constantsService.signature_prefix}[a-zA-Z0-9]{${this.constantsService.signature_length_settings}}$`);
  
  text_settings:RegExp = new RegExp(`^[a-zA-Z0-9]{1,${this.constantsService.text_settings_length}}$`);

  data_to_sign:RegExp = new RegExp(`^[a-zA-Z0-9]+$`);

  contact_name:RegExp = new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$")
}

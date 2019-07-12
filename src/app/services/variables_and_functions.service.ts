import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class variables_and_functions_service{
constructor() { }

// Variables
block_time:number = 2;
password:string = "password";
transaction_history:any;
get_balance:string = '{"jsonrpc":"2.0","id":"0","method":"get_balance"}';
get_all_transactions:string = '{"jsonrpc":"2.0","id":"0","method":"get_transfers","params":{"in":true,"out":true,"pending":true,"filter_by_height":true}}';
get_public_address:string = '{"jsonrpc":"2.0","id":"0","method":"get_address"}';
get_view_key:string = '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"view_key"}}';
get_mnemonic_seed:string = '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"mnemonic"}}';
rescan_blockchain:string = '{"jsonrpc":"2.0","id":"0","method":"rescan_blockchain"}';
get_sub_addresses:string = '{"jsonrpc":"2.0","id":"0","method":"get_address","params":{"account_index":0}';
error:string = '{"error":{"message":"Could not authenticate"}}';

xcash_public_address_prefix:string = "XCA";
xcash_integrated_address_prefix:string = "XCB";
xcash_sub_address_prefix:string = "8";
xcash_public_address_length:number = 98;
xcash_integrated_address_length:number = 110;
xcash_sub_address_length:number = 95;
xcash_public_address_length_settings:number = this.xcash_public_address_length - this.xcash_public_address_prefix.length;
xcash_integrated_address_length_settings:number = this.xcash_integrated_address_length - this.xcash_integrated_address_prefix.length;
xcash_sub_address_length_settings:number = this.xcash_sub_address_length - this.xcash_sub_address_prefix.length;
xcash_total_supply = 100000000000;

private_key_length:number = 64;
mnemonic_seed_word_length:number = 25;
unencrypted_payment_id_length:number = 64;
encrypted_payment_id_length:number = 16;
signature_prefix:string = "SigV1";
signature_length:number = 93;
signature_length_settings:number = this.signature_length - this.signature_prefix.length;
text_settings_length:number = 30;

xcash_address:RegExp = new RegExp(`^(${this.xcash_public_address_prefix}[a-zA-Z0-9]{${this.xcash_public_address_length_settings}}|${this.xcash_integrated_address_prefix}[a-zA-Z0-9]{${this.xcash_integrated_address_length_settings}}|${this.xcash_sub_address_prefix}[a-zA-Z0-9]{${this.xcash_sub_address_length_settings}})$`);
mnemonic_seed_or_private_key:RegExp = new RegExp(`^((?:\\b[a-z]+\\b[ ]*){${this.mnemonic_seed_word_length}}|(?:[0-9a-f]{${this.private_key_length}}))$`);
private_key = new RegExp(`^(?:[0-9a-f]{${this.private_key_length}})$`);
payment_id:RegExp = new RegExp(`^([0-9a-f]{${this.unencrypted_payment_id_length}}|[0-9a-f]{${this.encrypted_payment_id_length}}|)$`);
encrypted_payment_id:RegExp = new RegExp(`^([0-9a-f]{${this.encrypted_payment_id_length}}|)$`);
xcash_amount:RegExp = new RegExp(`\\b(^[0-9]{1,11}.[0-9]{0,5}[1-9]{1}$|^[1-9]{1}[0-9]{0,10}$|${this.xcash_total_supply})\\b$`);
xcash_reserve_proof_amount:RegExp = new RegExp(`\\b(^[0-9]{1,11}.[0-9]{0,5}[1-9]{1}$|^[1-9]{1}[0-9]{0,10}$|${this.xcash_total_supply}|^ALL$)\\b$`);
reserve_proof = new RegExp("^ReserveProofV1[a-zA-Z0-9]+$");
signature = new RegExp(`^${this.signature_prefix}[a-zA-Z0-9]{${this.signature_length_settings}}$`);
text_settings = new RegExp(`^[a-zA-Z0-9]{1,${this.text_settings_length}}$`);

async get_post_request_data(data:string)
{
  // Variables
  var password:string = this.password;

  return new Promise(function(resolve, reject)
  {
    // Constants
    const PATH = "/json_rpc";
     
    // Variables
    var headers:any = new Headers();
    var result:string;
    var settings:object;    

    // append the headers
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    settings = {method:"post", headers: headers, body: data};

    // send the post request
    fetch("http://localhost:18285/json_rpc", settings)
    .then(res =>
    {
      result = res.headers.get('WWW-authenticate');
      if (!res.ok)
      {
        throw Error(res.statusText);
      }
      return res;
    })
    .then(res => resolve(res))
    .catch(error => 
    {
      if (error == "Error: Unauthorized")
      {
        let server_nonce:string;
        let HA1:string;
        let HA2:string;
        let auth_response:string;

        // create the authentication header
        server_nonce = result.substr(result.indexOf("nonce=")+7,result.indexOf(",stale")-8 - result.indexOf("nonce="));
        HA1 = CryptoJS.MD5(`username:xcash-rpc:${password}`).toString();
        HA2 = CryptoJS.MD5(`POST:${PATH}`).toString();
        auth_response = CryptoJS.MD5(`${HA1}:${server_nonce}:00000001:${new Date().getTime().toString()}:auth:${HA2}`).toString();
       
        // append the headers
        headers.append('Authorization', `Digest username="username", realm="xcash-rpc", nonce="${server_nonce}", uri="${PATH}", algorithm=MD5, response="${auth_response}", qop=auth, nc=00000001, cnonce="${new Date().getTime().toString()}"`);

        settings = {method:"post", headers: headers, body: data};
 
        // send the post request
        fetch("http://localhost:18285/json_rpc", settings)
        .then(res => res.text())
        .then(res => resolve(res.replace("\n","")))
        .catch(error => resolve(error))
       }
       else
       {
         resolve(error);
       }
    });
  })
}

sleep(milliseconds)
{
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async send_post_request(data:string, error:any)
{
  // Variables
  let data2:any;
  let count = 0;
  
  do
  {
    if (count !== 0)
    {
      await this.sleep(2000);
    }
    data2 = await this.get_post_request_data(data);
    count++;
  } while (data2.includes("Unauthorized") && count < 5);

  if (count === 5)
  {
    error.error_settings = true;
    return JSON.parse(this.error);
  }
  
  if (data2.includes("error"))
  {
    error.error_settings = true;
    return JSON.parse(data2);
  }
  error.error_settings = false;
  return JSON.parse(data2);
}  

xcash_amount_settings(count:number, settings:number)
{
  return settings === 0 ? count * 1000000 : count / 1000000;
}
}
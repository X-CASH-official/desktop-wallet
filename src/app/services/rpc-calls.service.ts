import { Injectable } from '@angular/core';
const exec = (<any>window).require('child_process').exec;
const crypto = (<any>window).require("crypto");
const fs = (<any>window).require('fs');

@Injectable({
  providedIn: 'root'
})
export class RpcCallsService {

  constructor() { }

  // Variables
  rpcUserAgent:string = fs.readFileSync("useragent.txt","utf8");

  sleep(milliseconds)
  {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  private async getPostRequestData(json_data: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {

        // Constants
        const requestHeaders: HeadersInit = new Headers();
        const URL = "http://localhost:18285/json_rpc";
     
        // Variables
        let result:string;
        let settings:object;   
        
        requestHeaders.set('Content-Type', 'application/json');
        requestHeaders.set('Accept', 'application/json'); 
        requestHeaders.set('User-Agent', this.rpcUserAgent); 

        settings = {method:"post", headers: requestHeaders, body: json_data};

        // send the post request
        fetch(URL, settings)
        .then(res => res.json())
        .then(res => resolve(res)) 
       .catch(error => reject(error));
      } catch (error) {
        reject(error);
      }
    });
  }

  private async getPostRequestDataNoErrors(json_data: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
      // Constants
        const requestHeaders: HeadersInit = new Headers();
        const URL = "http://localhost:18285/json_rpc";
     
        // Variables
        let result:string;
        let settings:object;   
        
        requestHeaders.set('Content-Type', 'application/json');
        requestHeaders.set('Accept', 'application/json'); 
        requestHeaders.set('User-Agent', this.rpcUserAgent); 

        settings = {method:"post", headers: requestHeaders, body: json_data};

        // send the post request
        fetch(URL, settings)
        .then(res => res.json())
        .then(res => resolve("OK"))
        .catch(error => resolve("OK"));
      } catch (error) {
        resolve("OK");
      } 
    });
  }

  private async closeWindow():Promise<string>
  {
    return new Promise(async (resolve, reject) => {
      // Constants
      const CLOSE_WALLET_URL:string = '{"jsonrpc":"2.0","id":"0","method":"close_wallet"}';

      await this.getPostRequestDataNoErrors(CLOSE_WALLET_URL);
      await this.sleep(20000);
      exec("taskkill /f /im xcash-wallet-rpc*");
      exec("killall -9 'xcash-wallet-rpc'");
      await this.sleep(20000);
      resolve("success");
  });
  }

  public async createWallet(walletData:any): Promise<object> {
    // Constants
    const CREATE_WALLET_URL:string = `{"jsonrpc":"2.0","id":"0","method":"create_wallet","params":{"filename":"${walletData.walletName}","password":"${walletData.walletPassword.password}","language":"English"}}`;
    
    return new Promise(async(resolve, reject) => {
    try
    {
      // close the wallet if it is already running
      console.log("Closing window");
      await this.closeWindow();

      // open the wallet in create wallet mode
      console.log(`"${__dirname}/../"xcash-wallet-rpc --rpc-bind-port 18285 --disable-rpc-login --wallet-dir "${__dirname}/../" --rpc-user-agent "${this.rpcUserAgent}"`);
      exec(`"${__dirname}/../"xcash-wallet-rpc --rpc-bind-port 18285 --disable-rpc-login --wallet-dir "${__dirname}/../" --rpc-user-agent "${this.rpcUserAgent}"`);
      await this.sleep(20000);
      console.log("creating window");
      console.log(CREATE_WALLET_URL);
      await this.getPostRequestData(CREATE_WALLET_URL);
      await this.sleep(20000);
 
      // at this point the wallet will try to sync if we let it
    
      // close the wallet
      console.log("Closing window");
      await this.closeWindow();

      // start the wallet
      console.log(`"${__dirname}/../"xcash-wallet-rpc --rpc-bind-port 18285 --disable-rpc-login --wallet-file "${__dirname}/../"${walletData.walletName}"" --password "${walletData.walletPassword.password}" --rpc-user-agent "${this.rpcUserAgent}"`);
      exec(`"${__dirname}/../"xcash-wallet-rpc --rpc-bind-port 18285 --disable-rpc-login --wallet-file "${__dirname}/../"${walletData.walletName}"" --password "${walletData.walletPassword.password}" --rpc-user-agent "${this.rpcUserAgent}"`);
      await this.sleep(20000);
      let publicAddress:string = await this.getPublicAddress();
      let mnemonicSeed:string = await this.getMnenonicSeed();

      console.log(publicAddress);
      console.log(mnemonicSeed);

      // close the wallet
      console.log("Closing window");
      await this.closeWindow();

      resolve({"public_address":publicAddress, "mnemonic_seed":mnemonicSeed});
    } catch (error) {
    reject({"status":"error"});
    }
    });
  }

  public async importWallet(walletData:any): Promise<object> {
    // Constants
    const IMPORT_WALLET_DATA:string = `{"version":1,"filename":"${__dirname}/../${walletData.walletName}","scan_from_height":0,"password":"${walletData.password}","seed":"${walletData.seed}"}`;
    const IMPORT_WALLET_FILE:string = "importwallet.txt";

    return new Promise(async(resolve, reject) => {
    try
    {
      // close the wallet if it is already running
      console.log("Closing window");
      await this.closeWindow();

      // create the importwallet.txt file
      fs.writeFileSync(IMPORT_WALLET_FILE, IMPORT_WALLET_DATA);
      await this.sleep(10000);

      // open the wallet in import mode
      console.log(`"${__dirname}/../"xcash-wallet-rpc --rpc-bind-port 18285 --disable-rpc-login --generate-from-json "${__dirname}/../${IMPORT_WALLET_FILE}" --rpc-user-agent "${this.rpcUserAgent}"`);
      exec(`"${__dirname}/../"xcash-wallet-rpc --rpc-bind-port 18285 --disable-rpc-login --generate-from-json "${__dirname}/../${IMPORT_WALLET_FILE}" --rpc-user-agent "${this.rpcUserAgent}"`);
      await this.sleep(20000);
 
      // at this point the wallet will try to sync if we let it
    
      // close the wallet
      console.log("Closing window");
      await this.closeWindow();

      // delete the importwallet.txt file
      fs.unlinkSync(IMPORT_WALLET_FILE);

      resolve({"status":"success"});
    } catch (error) {
    reject({"status":"error"});
    }
    });
  }

  public async getCurrentBlockHeight(): Promise<any> {
    // Constants
    const URL:string = '{"jsonrpc":"2.0","id":"0","method":"get_height"}';

   // Variables
   let data;

   try
   {
     data = await this.getPostRequestData(URL);
     return data.result.height;
   }
   catch(error)
   {
     return data.error.message;
   }
  }

  public async getPublicAddress(): Promise<string> {
    // Constants
    const URL:string = '{"jsonrpc":"2.0","id":"0","method":"get_address"}';

    // Variables
    let data;

    try
    {
      data = await this.getPostRequestData(URL);
      return data.result.address;
    }
    catch(error)
    {
      return data.error.message;
    }
  }

  public async getMnenonicSeed(): Promise<string> {
    // Constants
    const URL:string = '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"mnemonic"}}';

    // Variables
    let data;

    try
    {
      data = await this.getPostRequestData(URL);
      return data.result.key;
    }
    catch(error)
    {
      return data.error.message;
    }
  }

  public async getViewKey(): Promise<string>  {
    // Constants
    const URL:string = '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"view_key"}}';

    // Variables
    let data;

    try
    {
      data = await this.getPostRequestData(URL);
      return data.result.key;
    }
    catch(error)
    {
      return data.error.message;
    }
  }

  public async getSpendKey(): Promise<string> {
    // Constants
    const URL:string = '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"mnemonic"}}';

    // Variables
    let data;

    try
    {
      data = await this.getPostRequestData(URL);
      return data.result.key;
    }
    catch(error)
    {
      return data.error.message;
    }
  }

  public async sendPayment(sendType:string, paymentID:string, amount:number, address:string, sendSettings:string): Promise<string> {
    // Constants
    const URL:string = `{"jsonrpc":"2.0","id":"0","method":${sendType},"params":{"destinations":[{"amount":${amount},"address":${address}}],"priority":0,"ring_size":21,"get_tx_keys": true, "payment_id":${paymentID} "do_not_relay":${sendSettings}}}`;
   
    // Variables
    let data;

    try
    {
      data = await this.getPostRequestData(URL);
      return data.result.address;
    }
    catch(error)
    {
      return data.error.message;
    }
  }

  public async rescanBlockchain(): Promise<string> {
    // Constants
    const URL:string = '{"jsonrpc":"2.0","id":"0","method":"rescan_blockchain"}';

    await this.getPostRequestData(URL);
    return "OK";
  }
}

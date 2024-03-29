/* eslint-disable no-async-promise-executor */
import { Injectable } from '@angular/core';
import { Transaction } from 'electron';
const exec = (<any>window).require('child_process').exec;
const fs = (<any>window).require('fs');

@Injectable({
  providedIn: 'root'
})
export class RpcCallsService {

  // Variables
  walletsyncprogress = 0;
  WALLET_DIR = process.platform !== "win32" ? `${process.env.HOME}/xcash-official/` : (`${process.env.USERPROFILE}\\xcash-official\\`).replace(/\\/g,"\\\\");
  WALLET_RPC_LOG = `${this.WALLET_DIR}xcash-wallet-rpc.log`;
  WALLET_DIR_CREATE_WALLET = this.WALLET_DIR.slice(0, -1);
  rpcUserAgent = fs.readFileSync(`${this.WALLET_DIR}useragent.txt`, 'utf8');
  Remote_Node = JSON.parse(fs.readFileSync(`${this.WALLET_DIR}database.txt`, 'utf8')).wallet_settings.remote_node;
  XCASH_DECIMAL_PLACES = 1000000;
  currentWalletName = '';
  wallet_status = false;

  public sleep(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  private async getPostRequestData(json_data: string): Promise<Record<string, unknown>> {
    return new Promise((resolve, reject) => {
      try {
        // Constants
        const requestHeaders: HeadersInit = new Headers();
        const settings = { method: 'post', headers: requestHeaders, body: json_data };
        const URL = 'http://localhost:18285/json_rpc';

        requestHeaders.set('Content-Type', 'application/json');
        requestHeaders.set('Accept', 'application/json');
        requestHeaders.set('User-Agent', this.rpcUserAgent);

        // send the post request
        fetch(URL, settings)
          .then(res => res.json())
          .then(res => {
            console.log('received response:', JSON.stringify(res));
            resolve(res);
          })
          .catch(error => {
            console.log('received error:', JSON.stringify(error));
            reject(error);
          });
      } catch (error) {
        console.log('received error:', JSON.stringify(error));
        reject();
      }
    });
  }

  private async getPostRequestDataNoErrors(json_data: string): Promise<Record<string, unknown> | string> {
    return new Promise((resolve) => {
      try {
        // Constants
        const requestHeaders: HeadersInit = new Headers();
        const settings = { method: 'post', headers: requestHeaders, body: json_data };
        const URL = 'http://localhost:18285/json_rpc';

        requestHeaders.set('Content-Type', 'application/json');
        requestHeaders.set('Accept', 'application/json');
        requestHeaders.set('User-Agent', this.rpcUserAgent);

        // send the post request
        fetch(URL, settings)
          .then(res => res.json())
          .then(res => {
            console.log('received response:', JSON.stringify(res));
            resolve(res);
          })
          .catch(error => {
            console.log('received error:', JSON.stringify(error));
            resolve('OK');
          });
      } catch (error) {
        console.log('received error:', JSON.stringify(error));
        resolve('OK');
      }
    });
  }

  private async getPostRequestDataNoErrorsSeedNodes(json_data: string): Promise<Record<string, unknown> | string> {
    return new Promise((resolve) => {
      try {
        // Constants
        const requestHeaders: HeadersInit = new Headers();
        const settings = { method: 'post', headers: requestHeaders, body: json_data };
        const URL = 'http://usseed1.x-cash.org:18281/json_rpc';

        requestHeaders.set('Content-Type', 'application/json');
        requestHeaders.set('Accept', 'application/json');

        // send the post request
        fetch(URL, settings)
          .then(res => res.json())
          .then(res => {
            console.log('received response:', JSON.stringify(res));
            resolve(res);
          })
          .catch(error => {
            console.log('received error:', JSON.stringify(error));
            resolve('OK');
          });
      } catch (error) {
        console.log('received error:', JSON.stringify(error));
        resolve('OK');
      }
    });
  }

  public async closeWallet(settings: number): Promise<string> {
    return new Promise(async (resolve) => {
      // Constants
      const CLOSE_WALLET_URL = '{"jsonrpc":"2.0","id":"0","method":"close_wallet"}';

      if (settings === 1) {
        let block_height: number;
        let current_block_height: number;
        for (; ;) {
          block_height = await this.getCurrentBlockHeight();
          await this.sleep(30000);
          current_block_height = await this.getCurrentBlockHeight();
          console.log(`block_height = ${block_height} | current block height = ${current_block_height}`);
          if (block_height === current_block_height && block_height !== 0) {
            break;
          } else {
            await this.sleep(30000);
          }
        }
      }

      await this.getPostRequestDataNoErrors(CLOSE_WALLET_URL);
      await this.sleep(5000);
      exec('taskkill /f /im xcash-wallet-rpc*');
      exec("killall -9 'xcash-wallet-rpc'");
      await this.sleep(20000);
      resolve('success');
    });
  }

  public async createWallet(walletData: any): Promise<Record<string, unknown>> {
    // Constants
    const CREATE_WALLET_URL = `{"jsonrpc":"2.0","id":"0","method":"create_wallet","params":{"filename":"${walletData.walletName}","password":"${walletData.walletPassword.password}","language":"English"}}`;

    return new Promise(async (resolve, reject) => {
      try {

        // remove any wallet rpc log
        if (fs.existsSync(`${this.WALLET_RPC_LOG}`)) {
          fs.unlinkSync(`${this.WALLET_RPC_LOG}`);
        }

        // close the wallet if it is already running
        console.log('Closing window');
        await this.closeWallet(0);        

        // open the wallet in create wallet mode
        exec(`"${this.WALLET_DIR}xcash-wallet-rpc" --rpc-bind-port 18285 --disable-rpc-login --log-level 2 --wallet-dir "${this.WALLET_DIR}" --daemon-address "${this.Remote_Node}" --rpc-user-agent "${this.rpcUserAgent}"`);
        console.log(`"${this.WALLET_DIR}xcash-wallet-rpc" --rpc-bind-port 18285 --disable-rpc-login --log-level 2 --wallet-dir "${this.WALLET_DIR}" --daemon-address "${this.Remote_Node}" --rpc-user-agent "${this.rpcUserAgent}"`);
        await this.sleep(20000);
        console.log('creating window');
        console.log(CREATE_WALLET_URL);
        await this.getPostRequestData(CREATE_WALLET_URL);
        await this.sleep(20000);
        // at this point the wallet will try to sync if we let it

        // close the wallet
        console.log('Closing window');
        await this.closeWallet(1);

        // start the wallet
        exec(`"${this.WALLET_DIR}xcash-wallet-rpc" --rpc-bind-port 18285 --disable-rpc-login --log-level 2 --wallet-file "${this.WALLET_DIR}${walletData.walletName}" --password "${walletData.walletPassword.password}" --daemon-address "${this.Remote_Node}" --rpc-user-agent "${this.rpcUserAgent}"`);
        await this.sleep(20000);
        const publicAddress = await this.getPublicAddress();
        const mnemonicSeed = await this.getMnenonicSeed();

        // close the wallet
        console.log('Closing window');
        await this.closeWallet(0);

        this.wallet_status = true;

        resolve({ 'public_address': publicAddress, 'mnemonic_seed': mnemonicSeed });
      } catch (error) {
        reject({ 'status': error });
      }
    });
  }

  public async importWallet(walletData: any): Promise<Record<string, unknown>> {
    // Constants
    const IMPORT_WALLET_DATA = walletData.seed != '' ? `{"version":1,"filename":"${this.WALLET_DIR}${walletData.walletName}","scan_from_height":0,"password":"${walletData.password}","seed":"${walletData.seed}"}` : `{"version":1,"filename":"${this.WALLET_DIR}${walletData.walletName}","scan_from_height":0,"password":"${walletData.password}","address":"${walletData.publicaddress}","viewkey":"${walletData.viewkey}","spendkey":"${walletData.privatekey}"}`;
    const IMPORT_WALLET_FILE = `${this.WALLET_DIR}importwallet.txt`;

    return new Promise(async (resolve, reject) => {
      try {
        // remove any wallet rpc log
        if (fs.existsSync(`${this.WALLET_RPC_LOG}`)) {
          fs.unlinkSync(`${this.WALLET_RPC_LOG}`);
        }

        // close the wallet if it is already running
        console.log('Closing window');
        await this.closeWallet(0);

        // create the importwallet.txt file
        fs.writeFileSync(IMPORT_WALLET_FILE, IMPORT_WALLET_DATA);
        await this.sleep(10000);

        // open the wallet in import mode
        console.log(`"${this.WALLET_DIR}xcash-wallet-rpc" --rpc-bind-port 18285 --disable-rpc-login --log-level 2 --generate-from-json "${IMPORT_WALLET_FILE}" --daemon-address "${this.Remote_Node}" --rpc-user-agent "${this.rpcUserAgent}"`);
        exec(`"${this.WALLET_DIR}xcash-wallet-rpc" --rpc-bind-port 18285 --disable-rpc-login --log-level 2 --generate-from-json "${IMPORT_WALLET_FILE}" --daemon-address "${this.Remote_Node}" --rpc-user-agent "${this.rpcUserAgent}"`);
        await this.sleep(20000);

        // at this point the wallet will try to sync if we let it

        // close the wallet
        console.log('Closing window');
        await this.closeWallet(1);

        // start the wallet
        exec(`"${this.WALLET_DIR}xcash-wallet-rpc" --rpc-bind-port 18285 --disable-rpc-login --log-level 2 --wallet-file "${this.WALLET_DIR}${walletData.walletName}" --daemon-address "${this.Remote_Node}" --password "${walletData.password}" --rpc-user-agent "${this.rpcUserAgent}"`);
        await this.sleep(20000);

        // wait until the wallet is fully synced
        const publicAddress = await this.getPublicAddress();
        const balance = await this.getBalance();

        // close the wallet
        await this.closeWallet(0);

        // delete the importwallet.txt file
        fs.unlinkSync(IMPORT_WALLET_FILE);

        this.wallet_status = true;

        resolve({ 'public_address': publicAddress, 'balance': balance });
      } catch (error) {
        if (fs.existsSync(IMPORT_WALLET_FILE)) {
          fs.unlinkSync(IMPORT_WALLET_FILE);
        }
        reject({ "status": error });
      }
    });
  }

  public async openWallet(password: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        // remove any wallet rpc log
        if (fs.existsSync(`${this.WALLET_RPC_LOG}`)) {
          fs.unlinkSync(`${this.WALLET_RPC_LOG}`);
        }

        exec(`"${this.WALLET_DIR}xcash-wallet-rpc" --rpc-bind-port 18285 --disable-rpc-login --log-level 2 --wallet-file "${this.WALLET_DIR}${this.currentWalletName}" --password "${password}" --daemon-address "${this.Remote_Node}" --rpc-user-agent "${this.rpcUserAgent}"`);
        await this.sleep(20000);

        const publicAddress = await this.getPublicAddress();
        if (publicAddress.substr(0, 3) != 'XCA') {
          reject();
        }
        this.wallet_status = true;
        resolve();
      } catch (error) {
        reject();
      }
    });
  }

  public async getTransactions(): Promise<Transaction[]> {
    // Constants
    const URL = '{"jsonrpc":"2.0","id":"0","method":"get_transfers","params":{"in":true,"out":true}}';
    const transactions = [];

    // Variables
    let data;
    let count = 0;

    return new Promise(async (resolve, reject) => {
      try {
        data = await this.getPostRequestData(URL);
        data.result.in.forEach(item => {
          count++;
          transactions.push({
            id: count,
            amount: item.amount / this.XCASH_DECIMAL_PLACES,
            txid: item.txid,
            date: new Date(item.timestamp * 1000),
            transactionType: 'in',
            type: 'private',
            fees: item.fee / this.XCASH_DECIMAL_PLACES,
            paymentid: item.payment_id,
            blockHeight: item.height,
          });
        });

        data.result.out.forEach(item => {
          count++;
          transactions.push({
            id: count,
            amount: item.amount / this.XCASH_DECIMAL_PLACES,
            txid: item.txid,
            date: new Date(item.timestamp * 1000),
            transactionType: 'out',
            type: 'private',
            fees: item.fee / this.XCASH_DECIMAL_PLACES,
            paymentid: item.payment_id,
            blockHeight: item.height,
          });
        });

        // sort the data by date
        transactions.sort((a, b) => b.date - a.date);

        // re item the transactions
        count = 0;
        transactions.forEach(item => {
          count++
          item.id = count
        });
        resolve(transactions);
      } catch (error) {
        reject();
      }
    });
  }

  public async getCurrentBlockHeight(): Promise<any> {
    // Constants
    const URL = '{"jsonrpc":"2.0","id":"0","method":"get_height"}';

    // Variables
    let data;

    return new Promise(async (resolve) => {
      try {
        data = await this.getPostRequestDataNoErrors(URL);
        console.log(data);
        resolve(data.result.height);
      } catch (error) {
        resolve(0);
      }
    });
  }

  public async getCurrentNetworkBlockHeight(): Promise<any> {
    // Constants
    const URL = '{"jsonrpc":"2.0","id":"0","method":"get_block_count"}';

    // Variables
    let data;

    return new Promise(async (resolve) => {
      try {
        data = await this.getPostRequestDataNoErrorsSeedNodes(URL);
        resolve(data.result.count);
      } catch (error) {
        resolve(0);
      }
    });
  }

  public async getPublicAddress(): Promise<string> {
    // Constants
    const URL = '{"jsonrpc":"2.0","id":"0","method":"get_address"}';

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {

      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.address);
      } catch (error) {
        try {
          reject(data.error.message);
        } catch (error) {
          reject();
        }
      }
    });
  }

  public async getMnenonicSeed(): Promise<string> {
    // Constants
    const URL = '{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"mnemonic"}}';

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {

      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.key);
      }
      catch (error) {
        try { reject(data.error.message); } catch (error) { reject(); }
      }
    });
  }

  public async getPrivateKeys(): Promise<any> {
    return new Promise(async (resolve, reject) => {

      // Constants
      const privatekeys = { "seed": "", "viewkey": "", "spendkey": "" };

      // Variables
      let data;

      try {
        data = await this.getPostRequestData('{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"mnemonic"}}');
        privatekeys.seed = data.result.key;
        data = await this.getPostRequestData('{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"view_key"}}');
        privatekeys.viewkey = data.result.key;
        data = await this.getPostRequestData('{"jsonrpc":"2.0","id":"0","method":"query_key","params":{"key_type":"spend_key"}}');
        privatekeys.spendkey = data.result.key;
        resolve(privatekeys);
      }
      catch (error) {
        reject();
      }
    });
  }

  public async changePassword(currentpassword: string, newpassword: string): Promise<void> {
    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"change_wallet_password","params":{"old_password":"${currentpassword}","new_password":"${newpassword}"}}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {

      try {
        data = await this.getPostRequestData(URL);
        if (JSON.stringify(data).includes("error")) {
          reject(data.error.message);
        }
        else {
          resolve();
        }
      }
      catch (error) {
        reject();
      }
    });
  }

  public async getTxKey(txid: string): Promise<string> {
    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"get_tx_key","params":{"txid":"${txid}"}}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {

      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.tx_key);
      }
      catch (error) {
        try { reject(data.error.message); } catch (error) { reject(); }
      }
    });
  }

  public async createIntegratedAddress(paymentid: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      // Constants
      const URL = `{"jsonrpc":"2.0","id":"0","method":"make_integrated_address","params":{"payment_id":"${paymentid}"}}`;

      // Variables
      let data;

      try {
        data = await this.getPostRequestData(URL);
        resolve({ "payment_id": data.result.payment_id, "integrated_address": data.result.integrated_address });
      }
      catch (error) {
        try { reject({ "status": data.error.message }); } catch (error) { reject({ "status": "error" }); }
      }
    });
  }

  public async createSubAddress(label: string): Promise<string> {
    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"create_address","params":{"account_index":0,"label":"${label}"}}`;

    console.log(URL);

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {

      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.address);
      }
      catch (error) {
        try { reject(data.error.message); } catch (error) { reject(); }
      }
    });
  }

  public async getSubAddresses(subAddressCount: number): Promise<any> {
    return new Promise(async (resolve, reject) => {
      // create the sub address list
      let subAddressList = "";
      let count;

      for (count = 1; count <= subAddressCount; count++) {
        subAddressList += `${count},`;
      }
      subAddressList = subAddressList.slice(0, -1);

      // Constants
      const URL = `{"jsonrpc":"2.0","id":"0","method":"get_balance","params":{"account_index":0,"address_indices":[${subAddressList}]}}`;
      const subAddresses = [];

      // Variables
      let data;

      try {
        data = await this.getPostRequestData(URL);
        console.log(data);
        data.result.per_subaddress.forEach(item => {
          subAddresses.push({
            id: item.address_index,
            label: item.label,
            address: item.address,
            balance: item.balance / this.XCASH_DECIMAL_PLACES,
          });
        });
        resolve(subAddresses);
      }
      catch (error) {
        reject(subAddresses);
      }
    });
  }

  public async createSignedData(signedData: string): Promise<string> {
    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"sign","params":{"data":"${signedData}"}}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {

      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.signature);
      }
      catch (error) {
        try { reject(data.error.message); } catch (error) { reject(); }
      }
    });
  }

  public async verifySignedData(signedData: any): Promise<boolean> {
    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"verify","params":{"data":"${signedData.data}","address":"${signedData.public_address}","signature":"${signedData.signature}"}}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {

      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.good);
      }
      catch (error) {
        reject(false);
      }
    });
  }

  public async createReserveproof(reserveproofData: any): Promise<string> {
    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"get_reserve_proof","params":{"all":false,"account_index":0,"amount":${reserveproofData.amount},"message":"${reserveproofData.message}"}}`;
    // Variables
    let data;

    return new Promise(async (resolve, reject) => {

      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.signature);
      }
      catch (error) {
        try { reject(data.error.message); } catch (error) { reject(); }
      }
    });
  }

  public async verifyReserveproof(reserveproofData: any): Promise<boolean> {

    reserveproofData.message = reserveproofData.message == null ? "" : reserveproofData.message;

    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"check_reserve_proof","params":{"address":"${reserveproofData.public_address}","message":"${reserveproofData.message}","signature":"${reserveproofData.reserveproof}"}}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {

      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.good === true && data.result.spent === 0 ? true : false);
      }
      catch (error) {
        resolve(false);
      }
    });
  }

  public async getBalance(): Promise<number> {
    // Constants
    const URL = '{"jsonrpc":"2.0","id":"0","method":"get_balance"}';

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {
      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.balance / this.XCASH_DECIMAL_PLACES);
      } catch (error) {
        try {
          reject(data.error.message);
        } catch (error) {
          reject();
        }
      }
    });
  }

  public async sendPayment(sendPaymentData: any, settings: boolean): Promise<Record<string, unknown>> {
    // Constants
    const sendType = sendPaymentData.maxAmount === true ? "sweep_all" : "transfer_split";
    const URL = `{"jsonrpc":"2.0","id":"0","method":"${sendType}","params":{"destinations":[{"amount":${sendPaymentData.amount * this.XCASH_DECIMAL_PLACES},"address":"${sendPaymentData.recipient}"}],"priority":0,"ring_size":21,"get_tx_keys": true, "payment_id":"${sendPaymentData.paymentId}", "tx_privacy_settings":"${sendPaymentData.privacy}", "do_not_relay":${settings}}}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {
      try {
        data = await this.getPostRequestData(URL);
        resolve({ "status": "success", "txid": data.result.tx_hash_list[0], "txkey": data.result.tx_key_list[0], "fee": data.result.fee_list[0] / this.XCASH_DECIMAL_PLACES, "total": (data.result.fee_list[0] + data.result.amount_list[0]) / this.XCASH_DECIMAL_PLACES });
      } catch (error) {
        try {
          reject({ "status": data.error.message });
        } catch (error) {
          reject({ "status": "error" });
        }
      }
    });
  }

  public async rescanBlockchain(): Promise<string> {
    return new Promise(async (resolve) => {
      // Constants
      const URL = '{"jsonrpc":"2.0","id":"0","method":"rescan_blockchain"}';

      await this.getPostRequestData(URL);
      resolve("OK");
    });
  }

  public async sweep_all_vote(): Promise<string> {

    // get the wallets public address
    const public_address = await this.getPublicAddress();

    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"sweep_all","params":{"address":"${public_address}","ring_size":21}}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {
      try {
        data = await this.getPostRequestData(URL);
        await this.sleep(900000);
        resolve("OK");
      } catch (error) {
        try {
          reject(data.error.message);
        } catch (error) {
          reject();
        }
      }
    });
  }

public async check_vote_status(): Promise<string> {

    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"vote_status"}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {
      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.status);
      } catch (error) {
        try {
          reject(data.error.message);
        } catch (error) {
          reject();
        }
      }
    });
  }

public async revote(): Promise<string> {

    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"revote"}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {
      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.status);
      } catch (error) {
        try {
          reject(data.error.message);
        } catch (error) {
          reject();
        }
      }
    });
  }

  public async delegate_vote(delegateData: any): Promise<string> {
    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"vote","params":{"delegate_data":"${delegateData}"}}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {
      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.vote_status);
      } catch (error) {
        try {
          reject(data.error.message);
        } catch (error) {
          reject();
        }
      }
    });
  }

  public async delegate_register(delegateData: any): Promise<string> {
    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"delegate_register","params":{"delegate_name":"${delegateData.delegateName}","delegate_IP_address":"${delegateData.ipAddress}","delegates_public_key":"${delegateData.publicKey}"}}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {
      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.delegate_register_status);
      } catch (error) {
        try {
          reject(data.error.message);
        } catch (error) {
          reject();
        }
      }
    });
  }

  public async delegate_update(delegateData: any): Promise<string> {
    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"delegate_update","params":{"item":"${delegateData.delegateItem}","value":"${delegateData.delegateValue}"}}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {
      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.delegate_update_status);
      } catch (error) {
        try {
          reject(data.error.message);
        } catch (error) {
          reject();
        }
      }
    });
  }

  public async delegate_recover(delegateData: any): Promise<string> {
    // Constants
    const URL = `{"jsonrpc":"2.0","id":"0","method":"delegate_recover","params":{"domain_name":"${delegateData.domainName}"}}`;

    // Variables
    let data;

    return new Promise(async (resolve, reject) => {
      try {
        data = await this.getPostRequestData(URL);
        resolve(data.result.status);
      } catch (error) {
        try {
          reject(data.error.message);
        } catch (error) {
          reject();
        }
      }
    });
  }
}

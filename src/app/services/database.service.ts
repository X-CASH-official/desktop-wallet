import { Injectable } from '@angular/core';
import { IntegratedAddress } from 'src/app/modules/wallet/wallet-integrated-address/wallet-integrated-address.component';
import { SignedData } from 'src/app/modules/wallet/wallet-sign-data/wallet-sign-data.component';
import { ReserveProof } from 'src/app/modules/wallet/wallet-reserve-proof/wallet-reserve-proof.component';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';
import { Wallet } from 'src/app/models/wallet.model';
import { Contact } from '../models/contact.model';
const fs = (<any>window).require('fs');

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private RpcCallsService: RpcCallsService) { }

  // Variables
  DATABASE_DATA_FILE:string = "database.txt";

  sleep(milliseconds)
  {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  private async getCurrentWallet(): Promise<number> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Constants
      const DATABASE_DATA:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      const PUBLIC_ADDRESS = await this.RpcCallsService.getPublicAddress();
    
      // Variables
      let wallet_count;

      for (wallet_count = 0; wallet_count < DATABASE_DATA.wallet_data.length; wallet_count++)
      {
        if (DATABASE_DATA.wallet_data[wallet_count].public_address === PUBLIC_ADDRESS)
        {
          break;
        }
      }

      if (wallet_count === DATABASE_DATA.wallet_data.length)
      {
        reject(0);
      }
      else
      {
        resolve(wallet_count);
      }
    } catch (error) {
      reject(error);
    }
   });
  }
  
  public async getIntegratedAddresses(): Promise<IntegratedAddress[]> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Constants
      const DATABASE_DATA:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      const WALLET_COUNT:number = await this.getCurrentWallet();
    
      // variables
      let IntegratedAddress:IntegratedAddress[] = [];
      let count = 0;

      DATABASE_DATA.wallet_data[WALLET_COUNT].integrated_addresses.forEach(item => {
         count++;
        IntegratedAddress.push({
          id: count,
          label: item.label,
          paymentID: item.payment_id,
          address: item.integrated_address,
        });
     }); 
      resolve(IntegratedAddress);
    } catch (error) {
      reject(error);
    }
   });
  }

  public async saveIntegratedAddresses(data:any): Promise<any> {
    return new Promise(async(resolve, reject) => {
    try
    {    
      // Constants
      const WALLET_COUNT:number = await this.getCurrentWallet();

      // Variables
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));

      database_data.wallet_data[WALLET_COUNT].integrated_addresses.push({
          label: data.label,
          payment_id: data.payment_id,
          integrated_address: data.integrated_address,
        });

      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));
        
      resolve();
    } catch (error) {
      reject(error);
    }
   });
  }

  public async getSignedData(): Promise<SignedData[]> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Constants
      const DATABASE_DATA:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      const WALLET_COUNT:number = await this.getCurrentWallet();
    
      // variables
      let SignedData:SignedData[] = [];
      let count = 0;

      DATABASE_DATA.wallet_data[WALLET_COUNT].signed_data.forEach(item => {
         count++;
         SignedData.push({
          id: count,
          data: item.data,
          signature: item.signature,
        });
     }); 
      resolve(SignedData);
    } catch (error) {
      reject(error);
    }
   });
  }

  public async saveSignedData(data:any): Promise<any> {
    return new Promise(async(resolve, reject) => {
    try
    {    
      // Constants
      const WALLET_COUNT:number = await this.getCurrentWallet();

      // Variables
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));

      database_data.wallet_data[WALLET_COUNT].signed_data.push({
          data: data.data,
          signature: data.signature,
        });

      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));
        
      resolve();
    } catch (error) {
      reject(error);
    }
   });
  }

  public async getReserveproof(): Promise<ReserveProof[]> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Constants
      const DATABASE_DATA:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      const PUBLIC_ADDRESS = await this.RpcCallsService.getPublicAddress();
      const WALLET_COUNT:number = await this.getCurrentWallet();
    
      // variables
      let ReserveProof:ReserveProof[] = [];
      let count = 0;
      let data:boolean;
      let status:string[] = [];

      DATABASE_DATA.wallet_data[WALLET_COUNT].reserve_proofs.forEach(async (item) => {
         data = await this.RpcCallsService.verifyReserveproof({"public_address":PUBLIC_ADDRESS,"message":item.message,"reserveproof":item.reserve_proof});
         status[count] = data === true ? "Valid" : "Invalid";
         count++;
      });

      while(status[DATABASE_DATA.wallet_data[WALLET_COUNT].reserve_proofs.length-1] == undefined)
      {
        await this.sleep(1000);
      }

      count = 0;
      DATABASE_DATA.wallet_data[WALLET_COUNT].reserve_proofs.forEach((item) => { 
         ReserveProof.push({
          id: count+1,
          amount: item.balance,
          signature: item.reserve_proof,
          status: status[count],
        });
        count++;
     }); 
      resolve(ReserveProof);
    } catch (error) {
      reject(error);
    }
   });
  }

  public async saveReserveproof(data:any): Promise<any> {
    return new Promise(async(resolve, reject) => {
    try
    {    
      // Constants
      const WALLET_COUNT:number = await this.getCurrentWallet();

      // Variables
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));

      database_data.wallet_data[WALLET_COUNT].reserve_proofs.push({
          reserve_proof: data.reserve_proof,
          message: data.message,
          balance: data.balance / 1000000,
        });

      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));
        
      resolve();
    } catch (error) {
      reject(error);
    }
   });
  }

  public async getSubAddressCount(): Promise<number> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Constants
      const DATABASE_DATA:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      const WALLET_COUNT:number = await this.getCurrentWallet();
      
      resolve(DATABASE_DATA.wallet_data[WALLET_COUNT].sub_address_count);
    } catch (error) {
      reject(error);
    }
   });
  }

  public async updateSubAddressCount(): Promise<string> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Constants
      const WALLET_COUNT:number = await this.getCurrentWallet();

      // Variables
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));

      database_data.wallet_data[WALLET_COUNT].sub_address_count++;
      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));
      
      resolve();
    } catch (error) {
      reject(error);
    }
   });
  }

  public async getRemoteNode(): Promise<string> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Constants
      const DATABASE_DATA:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      
      resolve(DATABASE_DATA.wallet_settings.remote_node);
    } catch (error) {
      reject(error);
    }
   });
  }

  public async updateRemoteNode(remote_node:string): Promise<any> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Variables
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));

      database_data.wallet_settings.remote_node = remote_node;
      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));
      
      resolve();
    } catch (error) {
      reject(error);
    }
   });
  }

  public async getWalletData(): Promise<Wallet[]> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Constants
      const DATABASE_DATA:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
    
      // variables
      let Wallet:Wallet[] = [];
      let count = 0;

      DATABASE_DATA.wallet_data.forEach(item => {
         Wallet.push({
          id: count,
          name: item.wallet_name,
          publicKey: item.public_address,
          balance: item.balance,
        });
        count++;
     }); 
      resolve(Wallet);
    } catch (error) {
      reject(error);
    }
   });
  }

  public async saveWalletData(data:any): Promise<any> {
    return new Promise(async(resolve, reject) => {
    try
    { 
      // Variables
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));

      database_data.wallet_data.push({
        wallet_name: data.wallet_name,
        public_address: data.public_address,
        balance: data.balance
        });

      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));
        
      resolve();
    } catch (error) {
      reject(error);
    }
   });
  }

  public async editWalletData(data:any): Promise<any> {
    return new Promise(async(resolve, reject) => {
    try
    { 
      // update the data in the database
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      let wallet_name = database_data.wallet_data[data.id].wallet_name;
      database_data.wallet_data[data.id].wallet_name = data.name;
      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));

      // update the wallet files
      fs.renameSync(`${__dirname}/../${wallet_name}`,`${__dirname}/../${data.name}`);
      fs.renameSync(`${__dirname}/../${wallet_name}.keys`,`${__dirname}/../${data.name}.keys`);
        
      resolve();
    } catch (error) {
      reject(error);
    }
   });
  }

  public async deleteWalletData(id:number, settings:boolean): Promise<any> {
    return new Promise(async(resolve, reject) => {
    try
    { 
      // update the data in the database
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      let wallet_name = database_data.wallet_data[id].wallet_name;
      database_data.wallet_data.splice(id, 1);
      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));

      // update the wallet files
      if (settings === true)
      {
        fs.unlinkSync(`${__dirname}/../${wallet_name}`);
        fs.unlinkSync(`${__dirname}/../${wallet_name}.keys`);
      }

      resolve();
    } catch (error) {
      reject(error);
    }
   });
  }

  public async updateWalletBalance(balance:number): Promise<string> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Constants
      const WALLET_COUNT:number = await this.getCurrentWallet();

      // Variables
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));

      database_data.wallet_data[WALLET_COUNT].balance = balance;
      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));
      
      resolve();
    } catch (error) {
      reject(error);
    }
   });
  }

  public async getContacts(): Promise<Contact[]> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Constants
      const DATABASE_DATA:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
    
      // variables
      let Contact:Contact[] = [];
      let count;

      count = 0;
      DATABASE_DATA.contact_data.forEach((item) => { 
        Contact.push({
          id: count,
          name: item.name,
          address: item.public_address,
        });
        count++;
     }); 
      resolve(Contact);
    } catch (error) {
      reject(error);
    }
   });
  }

  public async addContacts(data:any): Promise<any> {
    return new Promise(async(resolve, reject) => {
    try
    { 
      // Variables
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));

      database_data.contact_data.push({
          name: data.name,
          public_address: data.public_address,
        });

      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));
        
      resolve();
    } catch (error) {
      reject(error);
    }
   });
  }

  public async editContacts(data:any): Promise<any> {
    return new Promise(async(resolve, reject) => {
    try
    { 
      // Variables
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      database_data.contact_data[data.id].name = data.name;
      database_data.contact_data[data.id].public_address = data.public_address;

      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));
        
      resolve();
    } catch (error) {
      reject(error);
    }
   });
  }

  public async deleteContacts(id:number): Promise<any> {
    return new Promise(async(resolve, reject) => {
    try
    { 
      // Variables
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      database_data.contact_data.splice(id, 1);
      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));
        
      resolve();
    } catch (error) {
      reject(error);
    }
   });
  }

  
}



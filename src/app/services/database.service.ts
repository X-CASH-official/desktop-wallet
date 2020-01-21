import { Injectable } from '@angular/core';
import { IntegratedAddress } from 'src/app/modules/wallet/wallet-integrated-address/wallet-integrated-address.component';
import { RpcCallsService } from 'src/app/services/rpc-calls.service';
const fs = (<any>window).require('fs');

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private RpcCallsService: RpcCallsService) { }

  // Variables
  DATABASE_DATA_FILE:string = "database.txt";
  
  public async getIntegratedAddresses(): Promise<IntegratedAddress[]> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Constants
      const DATABASE_DATA:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      const PUBLIC_ADDRESS = await this.RpcCallsService.getPublicAddress();
    
      // Variables
      let IntegratedAddress:IntegratedAddress[] = [];
      let wallet_count;
      let count;

      for (wallet_count = 0; wallet_count < DATABASE_DATA.wallet_data.length; wallet_count++)
      {
        if (DATABASE_DATA.wallet_data[wallet_count].public_address === PUBLIC_ADDRESS)
        {
          break;
        }
      }

      if (wallet_count === DATABASE_DATA.wallet_data.length)
      {
        reject();
      }
    
      count = 0;
      DATABASE_DATA.wallet_data[wallet_count].integrated_addresses.forEach(item => {
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
      const PUBLIC_ADDRESS = await this.RpcCallsService.getPublicAddress();

      // Variables
      let database_data:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      let wallet_count;

      for (wallet_count = 0; wallet_count < database_data.wallet_data.length; wallet_count++)
      {
        if (database_data.wallet_data[wallet_count].public_address === PUBLIC_ADDRESS)
        {
          break;
        }
      }

      if (wallet_count === database_data.wallet_data.length)
      {
        reject();
      }

      database_data.wallet_data[wallet_count].integrated_addresses.push({
          label: data.label,
          payment_id: data.payment_id,
          integrated_address: data.integrated_address,
        });

      fs.writeFileSync(this.DATABASE_DATA_FILE, JSON.stringify(database_data));
        
      resolve();
    } catch (error) {
      reject();
    }
   });
  }

  /*public async getSubAddressCount(): Promise<number> {
    return new Promise(async(resolve, reject) => {
    try
    {
      // Constants
      const DATABASE_DATA:any = JSON.parse(fs.readFileSync(this.DATABASE_DATA_FILE,"utf8"));
      const PUBLIC_ADDRESS = await this.RpcCallsService.getPublicAddress();
    
      // Variables
      let wallet_count;
      let count;

      for (wallet_count = 0; wallet_count < DATABASE_DATA.wallet_data.length; wallet_count++)
      {
        if (DATABASE_DATA.wallet_data[wallet_count].public_address === PUBLIC_ADDRESS)
        {
          break;
        }
      }

      if (wallet_count === DATABASE_DATA.wallet_data.length)
      {
        reject();
      }
    
      count = 0;
      DATABASE_DATA.wallet_data[wallet_count].integrated_addresses.forEach(item => {
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
  }*/

  
}



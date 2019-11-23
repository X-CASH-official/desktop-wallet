import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RpcCallsService {

  constructor() { }

  public createWallet(args: object): Promise<object> {
    return new Promise((resolve, reject) => {
      try {
        // RPC call
        resolve({result: 'ofTheRPC'});
      } catch (e) {
        reject('Error reason');
      }
    });
  }
}

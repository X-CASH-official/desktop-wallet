import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RpcCallsService {

  constructor() { }

  private async getPostRequestData(json_data: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const error:object = {'result':{'status':'error'}};

      try {

        // Constants
        const requestHeaders: HeadersInit = new Headers();
        const URL = "http://localhost:18281/json_rpc";
     
        // Variables
        let result:string;
        let settings:object;   
        
        requestHeaders.set('Content-Type', 'application/json');
        requestHeaders.set('Accept', 'application/json'); 
        settings = {method:"post", headers: requestHeaders, body: json_data};

        // send the post request
        fetch(URL, settings)
        .then(res => res.json())
        .then(res => resolve(res)) 
       .catch(error => resolve(error));
      } catch (e) {
        resolve(error);
      }
    });
  }

  public async getCurrentBlockHeight() {
    // Constants
    const URL:string = `{"jsonrpc":"2.0","id":"0","method":"get_block_count"}' -H 'Content-Type: application/json`;

    let data = await this.getPostRequestData(URL);
    if (data.result.hasOwnProperty("status") && data.result.status === "OK")
    {
      return data.result.count;
    }
    else if (data.result.hasOwnProperty("status") && data.result.status !== "OK")
    {
      return data.result.status;
    }
    else
    {
      return data;
    } 
  }

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

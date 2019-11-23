import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class XcashPriceIndexService {
  
  constructor(private http: HttpClient) { }
  
  reqOptions = {               
    headers: {
      'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    },
  };
  
  reqUrl: string = 'https://api.coingecko.com/api/v3/simple/price?ids=x-cash&vs_currencies=usd&include_last_updated_at=true';
  
  // For the moment this service is really simple and only uses coingecko API
  /**
   * Get the XCASH price index in USD via CoinGecko
   * @return an `Observable` every 5min
   */
  getPrice(): Observable<object> {
    return Observable.timer(0, 5 * 60 * 1000).flatMap(() => {
      return this.http.get(this.reqUrl, this.reqOptions)
    });
  }
}

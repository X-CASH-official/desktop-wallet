import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true; // TODO this should be positioned to false by default (just to speed up in dev mode)

  // store the URL so we can redirect after logging in
  redirectUrl: string = '/wallet-dashboard';

  login(): Observable<boolean> {
    return of(true).pipe(
      // delay(1000), // uncomment to simulate loading
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
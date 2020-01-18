import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public authService: AuthService, public router: Router) {
    // HARD CODE DARK THEME BY DEFAULT
    // because configuration will be called later and apply app-config.ts
    document.querySelector('body').classList.add('datta-dark');
  }

  loginForm = new FormGroup({
    password: new FormControl('', [Validators.required])
  });
  get password() {
    return this.loginForm.get('password');
  }

  onSubmitPassword() {
    if (this.loginForm.valid) {
      this.login();
    } else {
      this.password.markAsTouched();
    }
  }

  login() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '';

        // Redirect the user
        this.router.navigateByUrl(redirect);
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
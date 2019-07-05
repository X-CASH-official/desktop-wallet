import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signup',
        loadChildren: './auth-signup/auth-signup.module#AuthSignupModule'
      },
      {
        path: 'signin',
        loadChildren: './auth-signin/auth-signin.module#AuthSigninModule'
      },
      {
        path: 'reset-password',
        loadChildren: './auth-reset-password/auth-reset-password.module#AuthResetPasswordModule'
      },
      {
        path: 'change-password',
        loadChildren: './auth-change-password/auth-change-password.module#AuthChangePasswordModule'
      },
      {
        path: 'personal-information',
        loadChildren: './auth-personal-info/auth-personal-info.module#AuthPersonalInfoModule'
      },
      {
        path: 'profile-settings',
        loadChildren: './auth-profile-settings/auth-profile-settings.module#AuthProfileSettingsModule'
      },
      {
        path: 'map-form',
        loadChildren: './auth-map-form/auth-map-form.module#AuthMapFormModule'
      },
      {
        path: 'subscribe',
        loadChildren: './subscribe/subscribe.module#SubscribeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

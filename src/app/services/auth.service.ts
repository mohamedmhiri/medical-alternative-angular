import { Store } from '@ngrx/store';
import { LOGGINGIN, LOGGINGOUT, RESET } from './../reducers/auth';
import { Observable } from 'rxjs/Observable'

import { AuthState } from './../models/auth-state';
import { AuthConfig } from './../config/auth-config';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';

// Avoid name not found warnings
declare var auth0: any;
// warnings from TypeScript
declare let Auth0Lock: any;

@Injectable()
export class AuthService {
  _auth: Observable<boolean>
  // Configure Auth0
  auth0 = new auth0.WebAuth({
    domain: this._config.getAuthDomain(),
    clientID: this._config.getAuthClientId(),
    // specify your desired callback URL
    redirectUri: 'http://localhost:4200',
    responseType: 'token id_token'
  });
  // Configure Auth0
  lock = new Auth0Lock(this._config.getAuthClientId(), this._config.getAuthDomain(), {});


  constructor(private router: Router, private _config: AuthConfig, private store: Store<AuthState>) {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      console.log(authResult)
      localStorage.setItem('id_token', authResult.idToken);
    });
    this._auth = store.select('_auth')
  }

  public handleAuthentication(): void {
    this.auth0.parseHash({ _idTokenVerification: false }, (err, authResult) => {
      if (err) {
        console.error(`Error: ${err.errorDescription}`)
      }
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        this.router.navigateByUrl('/menu');
      }
    });
  }

  public login(username: string, password: string): void {
    this.auth0.redirect.loginWithCredentials({
      connection: 'Username-Password-Authentication',
      username,
      password
    }, err => {
      if (err) return console.error(err.description);
    });
  }

  public signup(email, password): void {
    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email,
      password,
    }, err => {
      if (err) return console.error(err.description);
    });
  }

  public loginWithGoogle(): void {
    this.auth0.authorize({
      connection: 'google-oauth2',
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the id_token is expired or not
    return tokenNotExpired('id_token');
  }

  public logout(): void {
    // Remove token from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    this.router.navigateByUrl('/login');
  }

  private setUser(authResult): void {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
  }
}





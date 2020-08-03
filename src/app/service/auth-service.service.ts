import { AuthenticationResult } from '../model/authentication-result';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  saveAuthentication(authenticationResult: AuthenticationResult) {
    sessionStorage.setItem('recipes.token', authenticationResult.token);
  }

  logout(): void {
    sessionStorage.clear();
  }

  getToken(): string {
    return sessionStorage.getItem('recipes.token');
  }

isLoggedIn(): boolean {
  return sessionStorage.getItem('recipes.token') != null;
}

}

import {AuthenticationResult} from '../model/authentication-result';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
  }

  saveAuthentication(authenticationResult: AuthenticationResult) {
    sessionStorage.setItem('recipes.token', authenticationResult.token);
    sessionStorage.setItem('role', authenticationResult.role.toString());
  }

  logout(): void {
    sessionStorage.clear();
  }

  getToken(): string {
    return sessionStorage.getItem('recipes.token');
  }

  isAdmin(): boolean {
    return sessionStorage.getItem('role')  == '2';
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('recipes.token') != null;
  }

}

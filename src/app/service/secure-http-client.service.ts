import {Injectable} from '@angular/core';
import {AuthService} from './auth-service.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class SecureHttpClientService {

  apiUrl: string;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  private createAuthHeader() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.authService.getToken(),
    });

    return {
      headers
    };
  }

  public get(url: string): any {
    return this.httpClient.get(url, this.createAuthHeader());
  }

  public post(url: string, body: any): any {
    return this.httpClient.post(url, body, this.createAuthHeader());
  }

  public put(url: string, body?: any, absoluteUrl?: boolean): any {
    return this.httpClient.put(url, body, this.createAuthHeader());
  }

  public delete(url: string): any {
    return this.httpClient.delete(url, this.createAuthHeader());
  }
}

import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {SecureHttpClientService} from './secure-http-client.service';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {

  private usersUrlGet: string;
  private userUrlPost: string;

  users: User[];

  constructor(private http: SecureHttpClientService) {
    this.usersUrlGet = environment.apiUrl + '/users';
    this.userUrlPost = environment.apiUrl + '/user';
  }

  public findAll(): Observable<User[]> {
    return this.http.get(this.usersUrlGet);
  }

  public changeRole(id: number) {
    console.log("Http Sent!");
    console.log(id);
    return this.http.post(`${environment.apiUrl}/user`, id);
  }

}

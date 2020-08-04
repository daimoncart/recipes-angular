import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import {SecureHttpClientService} from "./secure-http-client.service";

@Injectable()
export class UserService {

  private usersUrlGet: string;
  private userUrlPost: string;

  constructor(private http: SecureHttpClientService) {
    this.usersUrlGet = 'http://localhost:8085/users';
    this.userUrlPost = 'http://localhost:8085/user';
  }

  public findAll(): Observable<User[]> {
    return this.http.get(this.usersUrlGet);
  }

  public save(user: User) {
    return this.http.post(this.userUrlPost, user);
  }
}

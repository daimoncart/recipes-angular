import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  private usersUrlGet: string;
  private userUrlPost: string;

  constructor(private http: HttpClient) {
    this.usersUrlGet = 'http://localhost:8085/users';
    this.userUrlPost = 'http://localhost:8085/user';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrlGet);
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrlPost, user);
  }
}

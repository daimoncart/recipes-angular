import {environment} from '../../environments/environment';
import {AuthenticationResult} from '../model/authentication-result';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class LoginRegisterService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username, password): Observable<AuthenticationResult> {
    return this.http.post<AuthenticationResult>(`${environment.apiUrl}/login`, {username, password});
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/register`, user);
  }

  getAll() {
    return this.http.get(`${environment.apiUrl}/users`);
  }

  getById(id: string) {
    return this.http.get(`${environment.apiUrl}/users/${id}`);
  }

  update(id, params) {
    return this.http.put(`${environment.apiUrl}/users/${id}`, params)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        if (id === this.userValue.id) {
          // update local storage
          const user = {...this.userValue, ...params};
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      }));
  }
}

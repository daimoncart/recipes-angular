import {Injectable} from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth.service';
import {Role} from '../../../model/role';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let url: string = state.url;
    const checkLogin = this.checkLogin(next, url);
    console.log(url, checkLogin);
    return checkLogin;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  private checkLogin(route: ActivatedRouteSnapshot, url: string): boolean {
    if (this.authService.isLoggedIn()) {
      const isAdmin = this.authService.isAdmin();
      if(route.data.roles == Role.Admin && isAdmin == false) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

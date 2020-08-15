import { Component } from '@angular/core';
import {AuthService} from "../service/auth-service.service";

@Component({
    selector: 'app-navi',
    templateUrl: './navi.component.html',
    styleUrls: ['./navi.component.css']
})

export class NaviComponent {

  constructor(private authService: AuthService) {
  }

    isShown = false;

  logout(){
    this.authService.logout();
  }

   isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}

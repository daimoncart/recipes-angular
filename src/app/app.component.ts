import {Component} from '@angular/core';
import {LoginRegisterService} from './service/login-register.service';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes';
  user: User;

  constructor(private accountService: LoginRegisterService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
  }
}

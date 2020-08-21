import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  user: User;

  constructor(private userService: UserService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      this.cd.detectChanges();
    });
  }

  getUserRole(user: User) {
    // @ts-ignore
    let role = user.role.roleName;
    if (role == 'ROLE_ADMIN') {
      return 'ADMIN';
    } else {
      return 'USER';
    }
  }


  changeUserRole(id: number) {
    console.log("Button clicked!");
    console.log(id);
    this.userService.changeRole(id).subscribe(this.userService.findAll().subscribe(data => {
      this.users = data;
      this.cd.detectChanges();
      location.reload();
    }));
  }

}

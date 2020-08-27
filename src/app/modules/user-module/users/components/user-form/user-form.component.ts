import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../../service/user.service';
import { User } from '../../../../../model/user';
import {LoginRegisterService} from '../../../../../service/login-register.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {

  user: User =  new User();
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private registerService: LoginRegisterService,
    private formBuilder: FormBuilder) {
      this.userForm = formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.minLength(8)]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      });

  }

  onSubmit() {
    this.user = this.userForm.getRawValue();
    this.registerService.register(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}

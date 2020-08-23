import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../service/user.service';
import {User} from '../../../../model/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginRegisterService} from '../../../../service/login-register.service';
import {FormUtils} from '../../../../utils/form-utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private loginRegisterService: LoginRegisterService
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.minLength(4)],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // this.userService.save(this.user);

    FormUtils.markFormGroupTouched(this.registerForm);

    if (this.registerForm.invalid) {
      return;
    }

    this.user.username = this.f.username.value;
    this.user.email = this.f.email.value;
    this.user.password = this.f.password.value;

    // this.loading = true;
    this.loginRegisterService.register(this.user)
      .subscribe(user => {
        if (user instanceof User) {
          this.userService.users.push(user);
        }
        this.router.navigate(['/login']);
      });
  }
}

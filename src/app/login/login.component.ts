import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginRegisterService} from '../service/login-register.service';
import {AuthService} from '../service/auth.service';
import {environment} from '../../environments/environment';
import {FormUtils} from '../utils/form-utils';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMessage: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginRegisterService,
    private authService: AuthService
  ) {

    if (this.loginService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.minLength(4)],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    FormUtils.markFormGroupTouched(this.loginForm);

    if (this.loginForm.invalid) {
      return;
    }

    console.log(1);
    this.loginService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        authenticationResult => {
          this.authService.saveAuthentication(authenticationResult);
          this.router.navigate(['/users']);
        }
      );
  }
}

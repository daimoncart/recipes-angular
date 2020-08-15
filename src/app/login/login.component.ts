import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginRegisterService} from '../service/login-register.service';
import {AuthService} from '../service/auth.service';
import {environment} from '../../environments/environment';

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

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.errorMessage = 'Invalid username or password!';

    // stop here if form is invalid
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

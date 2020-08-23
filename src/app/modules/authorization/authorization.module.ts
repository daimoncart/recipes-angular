import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorizationRoutingModule} from './authorization-routing.module';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule {
}

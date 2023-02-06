import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginPage} from "@pages/auth/login/login.page";
import {RegisterPage} from "@pages/auth/register/register.page";
import {ForgotPasswordComponent} from "@pages/auth/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "@pages/auth/reset-password/reset-password.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [LoginPage, RegisterPage, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {
}

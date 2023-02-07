import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPage} from "@pages/auth/login/login.page";
import {RegisterPage} from "@pages/auth/register/register.page";
import {ForgotPasswordComponent} from "@pages/auth/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "@pages/auth/reset-password/reset-password.component";

const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginPage,
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterPage,
  },
  {
    path: 'forgot-password',
    title: 'Forgot Password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    title: 'Reset Password',
    component: ResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}

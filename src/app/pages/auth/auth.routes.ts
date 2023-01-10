import {Route} from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'login',
    title: 'Login',
    loadComponent: async () => (await import('./login/login.page')).LoginPage,
  },
  {
    path: 'register',
    title: 'Register',
    loadComponent: async () => (await import('./register/register.page')).RegisterPage,
  },
  {
    path: 'forgot-password',
    title: 'Forgot Password',
    loadComponent: async () => (await import('./forgot-password/forgot-password.component')).ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    title: 'Reset Password',
    loadComponent: async () => (await import('./reset-password/reset-password.component')).ResetPasswordComponent,
  },
];

import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {AuthService} from '@lib/services';
import {UserType} from "@lib/enums/user-type";

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  loginMode: UserType = UserType.STUDENT;
  userType = UserType;
  private _callbackURL: string;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
  ) {
    this._callbackURL = this._activatedRoute.snapshot.queryParamMap.get('callbackURL') || `/`;
  }

  setUserType(type: string): void {
    switch (type) {
      case 'staff':
        this.loginMode = UserType.STAFF;
        break;
      case 'student':
        this.loginMode = UserType.STUDENT;
        break;
      default:
        this.loginMode = UserType.STUDENT;
    }
  }

  onClickSignIn(): void {
    this._authService.login();
    this._router.navigate([this._callbackURL]);
  }
}

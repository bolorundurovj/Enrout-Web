import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {AuthService} from '@lib/services';
import {UserType} from "@lib/enums/user-type";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {
  loginMode: UserType = UserType.STUDENT;
  userType = UserType;
  loginForm!: FormGroup;
  private _callbackURL: string;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private fb: FormBuilder
  ) {
    this._callbackURL = this._activatedRoute.snapshot.queryParamMap.get('callbackURL') || `/`;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  setUserType(type: UserType): void {
    this.loginMode = type;
  }

  onClickSignIn(): void {
    if (this.loginForm.valid) {
      if (this.loginMode === this.userType.STAFF) {
        this._authService.loginStaff(this.loginForm.value);
      } else {
        this._authService.loginStudent(this.loginForm.value)
      }
    } else {
      alert('Some data is invalid')
    }
    // this._router.navigate([this._callbackURL]);
  }
}

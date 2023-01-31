import {Injectable} from '@angular/core';
import {storage} from '@lib/utils/storage/storage.utils';
import {BehaviorSubject} from 'rxjs';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "@env/environment";
import {ILoginResponse} from "@lib/interfaces/ilogin-response";
import {IStudentRegistrationPayload} from "@lib/interfaces/istudent-registration-payload";
import {IStudent} from "@lib/interfaces/student.interface";
import {IStaffRegistrationPayload} from "@lib/interfaces/istaff-registration-payload";
import {IStaff} from "@lib/interfaces/istaff";
import {ILoginPayload} from "@lib/interfaces/ilogin-payload";
import {IAppUser} from "@lib/utils/storage/storage.types";
import {UserType} from "@lib/enums/user-type";
import {Notify} from "notiflix/build/notiflix-notify-aio";

const apiUrl = `${environment.apiUrl}/auth`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$ = new BehaviorSubject<boolean>(!!storage.getItem('App/session'));

  constructor(private router: Router, private http: HttpClient) {
  }

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  get loggedInUser(): IAppUser | null {
    return storage.getItem('App/user')
  }

  loginStudent(credentials: ILoginPayload): void {
    const authData = {email: credentials.email, password: credentials.password};
    this.http
      .post<ILoginResponse>(
        apiUrl + '/students/login',
        authData
      )
      .subscribe(
        (response) => {
          if (response) {
            storage.setItem('App/session', response);
            storage.setItem('App/token', response.token.accessToken);
            storage.setItem('App/user', {...response.user, role: UserType.STUDENT, fullName: `${response.user.firstName} ${response.user.lastName}`})
            Notify.success(`Logged in successfully`);
            this.isLoggedIn$.next(true);
            this.router.navigate(['/student']);
          } else {
            Notify.failure("An error occurred, please try again")
          }
        },
        (error) => {
          Notify.failure(`${error.error?.error || 'An error occurred'}`);
          this.isLoggedIn$.next(false);
        }
      );
  }

  loginStaff(credentials: ILoginPayload): void {
    const authData = {email: credentials.email, password: credentials.password};
    this.http
      .post<ILoginResponse>(
        apiUrl + '/staff/login',
        authData
      )
      .subscribe(
        (response) => {
          if (response) {
            storage.setItem('App/session', response);
            storage.setItem('App/token', response.token.accessToken);
            storage.setItem('App/user', {...response.user, role: UserType.STAFF, fullName: `${response.user.firstName} ${response.user.lastName}`})
            Notify.success(`Logged in successfully`);
            this.isLoggedIn$.next(true);
            this.router.navigate(['/staff']);
          } else {
            Notify.failure("An error occurred, please try again")
          }
        },
        (error) => {
          Notify.failure(`${error.error?.error || 'An error occurred'}`);
          this.isLoggedIn$.next(false);
        }
      );
  }

  registerStudent(user: IStudentRegistrationPayload): void {
    const authData = new FormData();
    for (const key in user) {
      if (user.hasOwnProperty(key)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        authData.append(key, user[key]);
      }
    }
    this.http
      .post<IStudent>(
        apiUrl + '/students/register',
        authData
      )
      .subscribe(
        (response) => {
          if (response) {
            Notify.success(`Registered successfully`);
            this.router.navigate(['/auth/login']);
          } else {
            Notify.failure("An error occurred, please try again")
          }
        },
        (error) => {
          Notify.failure(`${error?.error || 'An error occurred'}`);
          this.isLoggedIn$.next(false);
        }
      );
  }

  registerStaff(user: IStaffRegistrationPayload): void {
    const authData = new FormData();
    for (const key in user) {
      if (user.hasOwnProperty(key)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        authData.append(key, user[key]);
      }
    }
    this.http
      .post<IStaff>(
        apiUrl + '/staff/register',
        authData
      )
      .subscribe(
        (response) => {
          if (response) {
            Notify.success(`Registered successfully`);
            this.router.navigate(['/auth/login']);
          } else {
            Notify.failure("An error occurred, please try again")
          }
        },
        (error) => {
          Notify.failure(`${error?.error || 'An error occurred'}`);
          this.isLoggedIn$.next(false);
        }
      );
  }

  logout(): void {
    storage.removeItem('App/session');
    storage.removeItem('App/token');
    this.isLoggedIn$.next(false);
  }
}

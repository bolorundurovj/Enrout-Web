import {Injectable} from '@angular/core';
import {CanLoad, Route, Router, UrlSegment} from '@angular/router';
import {AuthService} from "@lib/services";
import {UserType} from "@lib/enums/user-type";

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanLoad {
  constructor(private _router: Router, private _authService: AuthService) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean {
    const user = this._authService.loggedInUser;
    if (user) {
      if (user.role === UserType.STAFF) {
        return true;
      }
      this._router.navigate(['/student'])
      return false;
    } else {
      this._authService.logout()
      return false
    }
  }
}

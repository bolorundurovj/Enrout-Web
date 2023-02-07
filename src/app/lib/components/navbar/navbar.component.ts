import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { REPOSITORY_URL } from '@lib/constants';
import { AuthService } from '@lib/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly repositoryURL = REPOSITORY_URL;

  constructor(private _router: Router, private _authService: AuthService) {}

  onClickSignOut(): void {
    this._authService.logout();
    this._router.navigateByUrl('/auth/login');
  }
}

import {Component, OnInit} from '@angular/core';
import {AuthService} from '@lib/services';
import {ThemeService} from '@lib/services/theme';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(private _authService: AuthService, private _themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this._authService.isLoggedIn$;

    this._themeService.init();
  }
}

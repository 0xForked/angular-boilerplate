import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  standalone: true,
  templateUrl: './login.page.html',
})
export class LoginPage {
  private readonly _callbackURL: string;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
  ) {
    this._callbackURL = this._activatedRoute.snapshot
      .queryParamMap.get('callbackURL') || `/`;
  }

  async onClickSignIn(): Promise<void> {
    this._authService.login();
    await this._router.navigate([this._callbackURL]);
  }
}

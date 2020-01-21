import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap, tap } from 'rxjs/operators';
import { login, loginError, loginSuccess, setToken } from '../../actions/auth.actions';
import { navigate } from '../../actions/router.actions';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
  }

  public login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          mergeMap((response) =>
            of(
              setToken({ token: response.token }),
              loginSuccess(),
              navigate({ commands: ['/dashboard'] }),
            ),
          ),
          catchError((error) =>
            of(loginError(error)),
          ),
        ),
      ),
    ),
  );

  public setToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setToken),
      tap(({ token }) => {
        if (token !== null) {
          localStorage.setItem('token', token);
        } else {
          localStorage.removeItem('token');
        }
      }),
    ),
    { dispatch: false },
  );
}

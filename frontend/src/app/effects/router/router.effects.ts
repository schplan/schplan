import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { navigate, navigateError, navigateSuccess } from '../../actions/router.actions';

@Injectable()
export class RouterEffects {
  public navigate = createEffect(() =>
    this.actions$.pipe(
      ofType(navigate),
      switchMap(({ commands }) =>
        from(this.router.navigate(commands)).pipe(
          map((success) => success
            ? navigateSuccess()
            : navigateError({ error: new Error('Navigation failed') })
          ),
          catchError((error) =>
            of(navigateError(error)),
          ),
        ),
      ),
    ),
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
  ) {
  }
}

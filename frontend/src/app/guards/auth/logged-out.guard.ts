import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { State } from '../../reducers';
import { selectToken } from '../../selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class LoggedOutGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly store: Store<State>,
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.store
      .select(selectToken)
      .pipe(
        take(1),
        map((token) =>
          token !== null
            ? this.router.createUrlTree(['/dashboard'])
            : true,
        ),
      );
  }
}

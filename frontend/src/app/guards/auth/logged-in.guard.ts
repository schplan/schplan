import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs';
import { selectToken } from '../../selectors/auth.selectors';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
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
          token === null
            ? this.router.createUrlTree(['/login'])
            : true,
        ),
      );
  }
}

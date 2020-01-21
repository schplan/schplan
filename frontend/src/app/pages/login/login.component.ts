import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from '../../actions/auth.actions';
import { State } from '../../reducers';
import { selectPending } from '../../selectors/auth.selectors';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  public pending$: Observable<boolean>;

  constructor(private readonly store: Store<State>) {
    this.pending$ = store.pipe(select(selectPending));
  }

  public handleSubmit(event: Event) {
    event.preventDefault();

    this.store.dispatch(login({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    }));
  }
}

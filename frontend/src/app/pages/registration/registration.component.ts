import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { register } from '../../actions/auth.actions';
import { select, Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs';
import { selectPending } from '../../selectors/auth.selectors';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  public registrationForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    repeatPassword: new FormControl('', [
      Validators.required,
      this.validateAreEqual.bind(this),
    ]),
  });

  public pending$: Observable<boolean>;

  constructor(private readonly store: Store<State>) {
    this.pending$ = store.pipe(select(selectPending));
  }

  public handleSubmit(event: Event) {
    event.preventDefault();

    this.store.dispatch(register({
      username: this.registrationForm.value.login,
      password: this.registrationForm.value.password,
    }));
  }

  private validateAreEqual(fieldControl: FormControl) {
    const field = this.registrationForm && this.registrationForm.get('password');

    return {
      NotEqual: !field || field.value !== fieldControl.value,
    };
  }
}

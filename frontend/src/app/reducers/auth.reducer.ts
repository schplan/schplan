import { createReducer, on } from '@ngrx/store';

import {
  login,
  loginError,
  loginSuccess,
  logout,
  register,
  registerError,
  registerSuccess,
  setToken,
} from '../actions/auth.actions';

export interface AuthState {
  token: string | null;
  validated: boolean;
  pending: boolean;
}

export const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  validated: false,
  pending: false,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, pending: true })),
  on(loginSuccess, (state) => ({ ...state, pending: false })),
  on(loginError, (state) => ({ ...state, token: null, pending: false })),

  on(register, (state) => ({ ...state, pending: true })),
  on(registerSuccess, (state) => ({ ...state, pending: false })),
  on(registerError, (state) => ({ ...state, token: null, pending: false })),

  on(logout, (state) => ({ ...state, token: null })),
  on(setToken, (state, { token }) => ({ ...state, token, validated: token !== null })),
);

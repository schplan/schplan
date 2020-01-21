import { createAction, props } from '@ngrx/store';

export const login = createAction('[auth] Login', props<{ username: string, password: string }>());
export const register = createAction('[auth] Register', props<{ username: string, password: string }>());

export const loginSuccess = createAction('[auth] Login success');
export const loginError = createAction('[auth] Login error', props<{ error: Error }>());

export const registerSuccess = createAction('[auth] Register success');
export const registerError = createAction('[auth] Register error', props<{ error: Error }>());

export const logout = createAction('[auth] Logout');
export const setToken = createAction('[auth] Login success', props<{ token: string | null }>());

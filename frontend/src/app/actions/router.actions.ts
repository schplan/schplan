import { createAction, props } from '@ngrx/store';

export const navigate = createAction('[router] navigate', props<{ commands: string[] }>());
export const navigateSuccess = createAction('[router] success');
export const navigateError = createAction('[router] error', props<{ error: Error }>());

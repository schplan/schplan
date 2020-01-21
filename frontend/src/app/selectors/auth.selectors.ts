import { State } from '../reducers';

export const selectPending = (state: State) => state.auth.pending;
export const selectToken = (state: State) => state.auth.token;

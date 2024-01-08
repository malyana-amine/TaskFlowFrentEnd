// login.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as LoginActions from '../actions/login.actions';

export interface LoginState {
  user: any;
  error: any;
}

export const initialState: LoginState = {
  user: null,
  error: null
};

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.loginSuccess, (state, { user }) => ({ ...state, user })),
  on(LoginActions.loginFailure, (state, { error }) => ({ ...state, error })),
  // Add other cases for different actions
);

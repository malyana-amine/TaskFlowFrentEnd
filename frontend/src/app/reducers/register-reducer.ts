import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/register-action';

export interface AuthState {
  user: any;
  loading: boolean;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.signUp, state => ({ ...state, loading: true })),
  on(AuthActions.signUpSuccess, (state, { user }) => ({ ...state, user, loading: false, error: null })),
  on(AuthActions.signUpFailure, (state, { error }) => ({ ...state, loading: false, error }))
);

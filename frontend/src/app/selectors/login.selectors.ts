// login.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from '../reducers/login.reducer';

// Select the top-level feature state
export const selectLoginState = createFeatureSelector<LoginState>('login');

// Selectors for specific pieces of state
export const selectUser = createSelector(
  selectLoginState,
  (state: LoginState) => state.user
);

export const selectError = createSelector(
  selectLoginState,
  (state: LoginState) => state.error
);

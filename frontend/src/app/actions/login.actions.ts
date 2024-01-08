// login.actions.ts
import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login] Login',
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ user: any }>()
);

export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: any }>()
);

// Add other actions if needed

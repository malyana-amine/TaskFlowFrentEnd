import { createAction, props } from '@ngrx/store';

export const signUp = createAction(
  '[Auth] Sign Up',
  props<{ username: string, email: string, password: string }>()
);

export const signUpSuccess = createAction(
  '[Auth] Sign Up Success',
  props<{ user: any }>()
);

export const signUpFailure = createAction(
  '[Auth] Sign Up Failure',
  props<{ error: any }>()
);

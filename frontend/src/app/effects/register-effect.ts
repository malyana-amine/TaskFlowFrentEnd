import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AuthActions from '../actions/register-action';
import { AuthService } from '../services/register.service';

@Injectable()
export class AuthEffects {

    signUp$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.signUp),
        mergeMap(action => {
          console.log('Sign Up Action:', action);
          return this.authService.signUp(action.username, action.email, action.password).pipe(
            map(user => {
              console.log('Sign Up Success:', user);
              return AuthActions.signUpSuccess({ user });
            }),
            catchError(error => {
              console.error('Sign Up Error:', error);
              return of(AuthActions.signUpFailure({ error }));
            })
          );
        })
      ));

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}

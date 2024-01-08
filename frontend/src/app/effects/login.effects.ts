// login.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as LoginActions from '../actions/login.actions';
import { LoginService } from '../services/login.service';

@Injectable()
export class LoginEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.login),
    switchMap(action => this.loginService.login(action.username, action.password)
      .pipe(
        map(user => LoginActions.loginSuccess({ user })),
        catchError(error => of(LoginActions.loginFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private loginService: LoginService 
  ) {}
}

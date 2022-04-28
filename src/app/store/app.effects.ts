/*
Step 3
Let's create an effect now so that we
can listen to the GET_USERS action, perform the API call,
and dispatch the success action in case of successful
data fetch.
*/

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../core/services/user.service';
//Step 3 - line 15 is from step 2
import { APP_ACTIONS, getUsersFailure, getUsersSuccess } from './app.actions';
@Injectable()
export class AppEffects {
    constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }
  /*
  Step 4 -line 28
  We'll create a new effect in the app.effects.ts
  file now to register a listener for the GET_USERS action,
  as follows:
   */
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(APP_ACTIONS.GET_USERS),
      mergeMap(() => this.userService.getUsers()
        .pipe(
          map(users => {
            return getUsersSuccess({
              users
            })
          }),
          catchError((error) => of(getUsersFailure({
            error
          })))
        )
      )
    )
  );
}


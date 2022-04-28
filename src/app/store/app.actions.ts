/*
Step 2
create actions to get the users from the HTTP call.
We'll have one action to get the users, one to dispatch
on successfully getting the users,
and one action to dispatch in case we get an error.
*/
import { createAction, props } from '@ngrx/store';
import { IUser } from '../core/interfaces/user.interface';
export const APP_ACTIONS = {
  GET_USERS: '[Users] Get Users',
  GET_USERS_SUCCESS: '[Users] Get Users Success',
  GET_USERS_FAILURE: '[Users] Get Users Failure',
}
//stpe 2We'll now create actions to get the users from the HTTP call.
export const getUsers = createAction(
  APP_ACTIONS.GET_USERS,
);

//step 2 -one to dispatch on successfully getting the users,
export const getUsersSuccess = createAction(
  APP_ACTIONS.GET_USERS_SUCCESS,
  props<{ users: IUser[] }>()
);

//step 2 - one action to dispatch in case we get an error
export const getUsersFailure = createAction(
  APP_ACTIONS.GET_USERS_FAILURE,
  props<{ error: string }>()
);

/*
 * Let's update the state in the app.reducer.ts
 * file to listen to the GET_USERS_SUCCESS action
 * and assign the users to the state accordingly.
 * The code should look like this:
 */
import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from '../core/interfaces/user.interface';
//step 7
import { getUsersSuccess } from './app.actions';

export interface AppState {
  users: IUser[];
}

const initialState: AppState = {
  users: []
}
// reducer -
// Creates a reducer function to handle state transitions.
const appReducer = createReducer(
  initialState,
  //step 7
  //on in ngrx -
  //Associates actions with a given state change function.
  //A state change function must be provided as the last
  //parameter.
  on(getUsersSuccess, (state, action) => ({
    ...state,
    users: action.users
  }))
);

export function reducer(
  state: AppState = initialState,
  action: Action) {
  return appReducer(state, action);
}

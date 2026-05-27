import { createReducer, on } from '@ngrx/store';
import { DataState } from '../../../../models/common.models';
import { UserPost } from '../../models/users.models';
import { usersDataActions } from '../actions/users.actions';

// Initial state for the users feature. These values are used
// when the store is first created before any actions have run.
export const initialUsersState: DataState<UserPost[]> = {
  data: null,
  loading: false,
  error: null,
};

// Reducer for users state: updates loading/data/error based on actions.
export const usersReducer = createReducer(
  initialUsersState,
  on(usersDataActions.getUsersData, (state) => ({
    ...state,
    data: null,
    loading: true,
    error: null,
  })),
  on(usersDataActions.getUsersDataSuccess, (state, { users }) => ({
    ...state,
    data: users,
    loading: false,
  })),
  on(usersDataActions.getUsersDataFailure, (state, { error }) => ({
    ...state,
    data: null,
    loading: false,
    error,
  })),
);

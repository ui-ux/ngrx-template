import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataState } from '../../../../models/common.models';
import { UserPost } from '../../models/users.models';

// Selectors for the users feature state.
// selectUsersState returns the whole users slice from the store.
// The other selectors extract specific properties from that slice.
export const selectUsersState =
  createFeatureSelector<DataState<UserPost[]>>('users');
export const selectUsersData = createSelector(
  selectUsersState,
  (state) => state.data,
);
export const selectUsersLoading = createSelector(
  selectUsersState,
  (state) => state.loading,
);
export const selectUsersError = createSelector(
  selectUsersState,
  (state) => state.error,
);

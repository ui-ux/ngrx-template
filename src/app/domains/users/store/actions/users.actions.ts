import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserPost } from '../../models/users.models';

// Create a group of actions related to page navigation/triggers.
// These actions do not carry any payload, they only signal that a page
// or route-related process should start.
export const usersPageActions = createActionGroup({
  source: 'users pages',
  events: {
    'init users index page': emptyProps(),
    'init user individual page': emptyProps(),
  },
});

// Create a group of actions related to user data loading.
// This group includes request, success, and failure actions for fetching users.
export const usersDataActions = createActionGroup({
  source: 'users data',
  events: {
    // The request action has no payload; it simply triggers the load process.
    'get users data': emptyProps(),
    // Success action carries the fetched users array as payload.
    'get users data success': props<{ users: UserPost[] }>(),
    // Failure action carries an error string describing the problem.
    'get users data failure': props<{ error: string }>(),
  },
});

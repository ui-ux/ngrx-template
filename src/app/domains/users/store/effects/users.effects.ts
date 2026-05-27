import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  filter,
  map,
  withLatestFrom,
} from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { usersDataActions, usersPageActions } from '../actions/users.actions';
import { selectUsersData } from '../selectors/users.selectors';

@Injectable()
export class UsersEffects {
  private readonly actions$ = inject(Actions);
  private readonly usersService = inject(UsersService);
  private readonly store = inject(Store);

  initUsersIndexPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersPageActions.initUsersIndexPage),
      withLatestFrom(this.store.select(selectUsersData)),
      filter(([_, users]) => !users),
      map(() => usersDataActions.getUsersData()),
    ),
  );

  initUserIndividualPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersPageActions.initUserIndividualPage),
      withLatestFrom(this.store.select(selectUsersData)),
      filter(([_, users]) => !users),
      map(() => usersDataActions.getUsersData()),
    ),
  );

  getUsersData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersDataActions.getUsersData),

      exhaustMap(() =>
        this.usersService.getUsers().pipe(
          map((users) => usersDataActions.getUsersDataSuccess({ users })),
          catchError((error) =>
            of(
              usersDataActions.getUsersDataFailure({
                error: error.message + ' failed to load users data',
              }),
            ),
          ),
        ),
      ),
    ),
  );
}

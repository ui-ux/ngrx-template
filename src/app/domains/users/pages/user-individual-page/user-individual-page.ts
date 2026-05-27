import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store, createSelector } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';
import { getRouterSelectors } from '@ngrx/router-store';
import { UserPost } from '../../models/users.models';
import { usersPageActions } from '../../store/actions/users.actions';
import {
  selectUsersData,
  selectUsersError,
  selectUsersLoading,
} from '../../store/selectors/users.selectors';

// Router selectors helper
const { selectRouteParam } = getRouterSelectors();
const selectRouteId = createSelector(selectRouteParam('id'), (id) => Number(id));

@Component({
  selector: 'app-user-individual-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-individual-page.html',
  styleUrls: ['./user-individual-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserIndividualPage {
  private readonly store = inject(Store);
  // route param will now be read from router-store via selector
  // private readonly route = inject(ActivatedRoute);
  readonly users$ = this.store.select(selectUsersData);
  readonly loading$ = this.store.select(selectUsersLoading);
  readonly error$ = this.store.select(selectUsersError);

  readonly selectedUser$ = combineLatest([
    // read :id from the router-store selector instead of ActivatedRoute
    this.store.select(selectRouteId),
    this.users$,
  ]).pipe(
    map(([id, users]) => users?.find((user: UserPost) => user.id === id) ?? null),
  );

  constructor() {
    this.store.dispatch(usersPageActions.initUserIndividualPage());
  }
}

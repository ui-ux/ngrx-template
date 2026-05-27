import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserPost } from '../../models/users.models';
import { usersPageActions } from '../../store/actions/users.actions';
import {
  selectUsersData,
  selectUsersError,
  selectUsersLoading,
} from '../../store/selectors/users.selectors';

@Component({
  selector: 'app-users-index-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users-index-page.html',
  styleUrls: ['./users-index-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersIndexPage {
  private readonly store = inject(Store);
  readonly users$: Observable<UserPost[] | null> =
    this.store.select(selectUsersData);
  readonly loading$ = this.store.select(selectUsersLoading);
  readonly error$ = this.store.select(selectUsersError);

  constructor() {
    this.store.dispatch(usersPageActions.initUsersIndexPage());
  }
}

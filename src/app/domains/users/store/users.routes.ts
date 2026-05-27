import { Routes } from '@angular/router';
import { UserIndividualPage } from '../pages/user-individual-page/user-individual-page';
import { UsersIndexPage } from '../pages/users-index-page/users-index-page';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UsersIndexPage,
      },
      {
        path: ':id',
        component: UserIndividualPage,
      },
    ],
  },
];

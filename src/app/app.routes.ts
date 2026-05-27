import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'documentation-and-links',
    pathMatch: 'full',
  },
  {
    path: 'documentation-and-links',
    // lazy loading of the documentation and links page
    loadChildren: () =>
      import('./domains/documentation-and-links/documentation-and-links.routes').then(
        (m) => m.routes,
      ),
  },
  {
    path: 'users',
    // lazy loading of the users feature module
    loadChildren: () =>
      import('./domains/users/store/users.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'documentation-and-links',
  },
];

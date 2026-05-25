import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./domains/documentation-and-links/documentation-and-links.routes').then(
        (m) => m.routes,
      ),
  },
];

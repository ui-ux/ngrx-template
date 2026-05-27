import {
  ApplicationConfig,
  isDevMode,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { usersReducer } from './domains/users/store/reducers/users.reducer';
import { UsersEffects } from './domains/users/store/effects/users.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    // Browser and Angular runtime providers
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),

    // NgRx router-store: syncs Angular Router state into the NgRx store
    provideRouterStore(),

    // NgRx Store: creates the global store and registers the router + users reducers
    provideStore({ router: routerReducer, users: usersReducer }),
    provideEffects([UsersEffects]),

    // Redux DevTools: enables browser DevTools integration for NgRx
    provideStoreDevtools({
      // Keep the last 25 actions in the DevTools history for time-travel debugging
      maxAge: 25,
      // In production mode, DevTools runs in log-only mode for safety and performance
      logOnly: !isDevMode(),
    }),

    // Router: provides Angular routing based on the defined application routes
    provideRouter(routes),
  ],
};

import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'login',
    title: 'login',
    loadComponent: async () => (await import('./login/login.page'))
      .LoginPage,
  },
];

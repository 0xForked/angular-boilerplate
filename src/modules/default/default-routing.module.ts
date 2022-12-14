import {Route} from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'home',
    title: 'home',
    loadComponent: async () => (await import('./home/home.page'))
      .HomePage,
  },
  {
    path: '**',
    title: 'not found',
    pathMatch: 'full',
    loadComponent: async () => (await import('./404/404.page'))
      .NotFoundPage,
  },
];

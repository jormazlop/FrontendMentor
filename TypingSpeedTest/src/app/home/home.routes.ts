import { Routes } from '@angular/router';
import { Home } from '@home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '',
        redirectTo: 'not-started',
        pathMatch: 'prefix',
      },
      { path: 'started', loadComponent: () => import('./home-started/home-started') },
      { path: 'not-started', loadComponent: () => import('./home-not-started/home-not-started') },
    ],
  },
];

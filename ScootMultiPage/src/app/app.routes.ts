import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'about', loadComponent: () => import('./pages/about/about.component')
  },
  {
    path: 'location', loadComponent: () => import('./pages/location/location.component')
  },
  {
    path: 'careers', loadComponent: () => import('./pages/careers/careers.component')
  },
  {
    path: '**', redirectTo: 'home'
  }
];

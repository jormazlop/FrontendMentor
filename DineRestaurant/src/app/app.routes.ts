import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home.component') },
  { path: 'reservations', loadComponent: () => import('./pages/reservations/reservations.component') },
  { path: '**', redirectTo: 'home' }
];

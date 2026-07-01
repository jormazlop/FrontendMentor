import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'compare', pathMatch: 'full' },
  { path: 'history', loadComponent: () => import('./tabs/history/history')},
  { path: 'compare', loadComponent: () => import('./tabs/compare/compare')},
  { path: 'favorites', loadComponent: () => import('./tabs/favorites/favorites')},
  { path: 'log', loadComponent: () => import('./tabs/log/log')},
  { path: 'providers', loadComponent: () => import('./tabs/providers/providers')},
  { path: 'currencies', loadComponent: () => import('./tabs/currencies/currencies')},
  { path: '**', redirectTo: 'compare' },
];

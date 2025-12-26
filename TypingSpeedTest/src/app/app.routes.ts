import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home/not-started', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes').then((m) => m.routes),
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.routes').then((m) => m.routes),
  },
  { path: '**', redirectTo: '' },
];

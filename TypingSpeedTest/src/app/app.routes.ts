import { Routes } from '@angular/router';
import { resultGuard } from '@shared/guards/result-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home/not-started', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes').then((m) => m.routes),
  },
  {
    path: 'results',
    canActivate:  [resultGuard],
    loadChildren: () => import('./results/results.routes').then((m) => m.routes),
  },
  {
    path: 'config',
    loadComponent: () => import('./config/config')
  },
  { path: '**', redirectTo: '' },
];

import { Routes } from '@angular/router';
import { goalResolver } from '@shared/resolver/goal-resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadComponent: () => import('./pages/main/main').then((c) => c.default) },
  {
    path: 'detail/:id',
    loadComponent: () => import('./pages/detail/detail').then((c) => c.default),
    resolve: { goal: goalResolver },
  },
  { path: '**', redirectTo: 'main' },
];

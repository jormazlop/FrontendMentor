import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'complete', loadComponent: () => import('./results-complete/results-complete') },
  { path: 'new-best', loadComponent: () => import('./results-new-best/results-new-best') },
  { path: 'first-test', loadComponent: () => import('./results-first-test/results-first-test') },
];

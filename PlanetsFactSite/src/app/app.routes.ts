import { Routes } from '@angular/router';
import { planetResolver } from './services/planet.resolver';

export const routes: Routes = [
  {
    path: 'detail/:id',
    loadComponent: () => import('../app/page/planet/planet.component'),
    resolve: { planet: planetResolver },
  },
  { path: '**', redirectTo: 'detail/0' },
];

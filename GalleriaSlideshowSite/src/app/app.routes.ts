import { Routes } from '@angular/router';
import { galleriaResolver } from './services/galleria.resolver';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home.component') },
  { path: 'detail/:id', loadComponent: () => import('./pages/detail/detail.component'), resolve: { painting: galleriaResolver }},
  { path: '**', redirectTo: 'home' }
];

import { Routes } from '@angular/router';
import { dataResolver } from './services/data.resolver';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./page/home/home.component') },
  { path: 'destination', loadComponent: () => import('./page/destination/destination.component'), resolve: {data: dataResolver} },
  { path: 'crew', loadComponent: () => import('./page/crew/crew.component'), resolve: {data: dataResolver} },
  { path: 'technology', loadComponent: () => import('./page/technology/technology.component'), resolve: {data: dataResolver} },
  { path: '**', redirectTo: 'home' }
];

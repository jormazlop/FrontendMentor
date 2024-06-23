import { Routes } from '@angular/router';
import { mapResolver } from './resolvers/map.resolver';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/main/main.component'), resolve: { map: mapResolver }}
];

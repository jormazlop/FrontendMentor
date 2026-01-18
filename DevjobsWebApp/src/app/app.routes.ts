import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', loadComponent: () => import('./home/home')
  },
  {
    path: 'detail/:id', loadComponent: () => import('./detail/detail'), data: { footer: true }
  },
  {
    path: '**', redirectTo: 'home'
  }
];

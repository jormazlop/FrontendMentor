import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home', loadComponent: () => import('./page/home/home.component')
  },
  {
    path: 'about-us', loadComponent: () => import('./page/about-us/about-us.component')
  },
  {
    path: 'create-your-plan', loadComponent: () => import('./page/create-your-plan/create-your-plan.component')
  },
  {
    path: '**', redirectTo: 'home'
  }
];

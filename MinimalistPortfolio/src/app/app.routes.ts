import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'portfolio', loadChildren: () => import('./pages/portfolio/routes').then(mod => mod.PORTFOLIO_ROUTES)
  },
  {
    path: 'contact', loadComponent: () => import('./pages/contact/contact.component')
  },
  {
    path: '**', redirectTo: 'home'
  }
];

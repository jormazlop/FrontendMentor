import { Route } from '@angular/router';

export const PORTFOLIO_ROUTES: Route[] = [

  { path: '', redirectTo: 'index', pathMatch: 'full'},
  {
    path: 'index', loadComponent: () => import('./portfolio-index/portfolio-index.component')
  },
  {
    path: 'manage', loadComponent: () => import('./portfolio-manage/portfolio-manage.component')
  },
  {
    path: 'bookmark', loadComponent: () => import('./portfolio-bookmark/portfolio-bookmark.component')
  },
  {
    path: 'insure', loadComponent: () => import('./portfolio-insure/portfolio-insure.component')
  },
  {
    path: 'fylo', loadComponent: () => import('./portfolio-fylo/portfolio-fylo.component')
  }
];

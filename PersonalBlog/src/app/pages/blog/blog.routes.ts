import { Route } from '@angular/router';

export const BLOG_ROUTES: Route[] = [
  {
    path: '', loadComponent: () => import('./blog.component')
  },
  {
    path: 'detail/:id', loadComponent: () => import('./detail.component')
  },
];

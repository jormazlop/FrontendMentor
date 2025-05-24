import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component') },
  { path: 'blog', loadComponent: () => import('./pages/blog/blog.component') },
  { path: 'about', loadComponent: () => import('./pages/about/about.component') },
  { path: 'newsletter', loadComponent: () => import('./pages/newsletter/newsletter.component') }
];

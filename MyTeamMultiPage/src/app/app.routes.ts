import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home') },
  { path: 'about', loadComponent: () => import('./pages/about/about') },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact') },
  { path: '**', redirectTo: '/' }
];

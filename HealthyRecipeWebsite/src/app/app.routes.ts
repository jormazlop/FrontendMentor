import { Routes } from '@angular/router';
import About from 'page/about/about';
import Home from 'page/home/home';
import Recipes from 'page/recipes/recipes';

export const routes: Routes = [
  {
    path: 'home', loadComponent: () => Home
  },
  {
    path: 'about', loadComponent: () => About
  },
  {
    path: 'recipes', loadChildren: () => import('./page/recipes/recipes.routes').then(routes => routes.routes)
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

import { Routes } from '@angular/router';
import Recipes from './recipes';
import { Detail } from './detail/detail';

export const routes: Routes = [
  {
    path: '',
    component: Recipes,
  },
  {
    path: ':id',
    component: Detail,
  },
];

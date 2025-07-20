import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full'
  },
  {
    path: 'main', loadComponent:() => import('./main/main')
  },
  {
    path: 'how-to-play', loadComponent:() => import('./how-to-play/how-to-play')
  },
  {
    path: 'pick-a-category', loadComponent:() => import('./pick-a-category/pick-a-category')
  },
  {
    path: 'categorie/:categorie', loadComponent:() => import('./categorie/categorie')
  },
  {
    path: '**', redirectTo: 'main'
  }
];

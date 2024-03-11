import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'game-selection', loadComponent: () => import('./pages/game-selection/game-selection.component') },
  { path: 'game-board', loadComponent: () => import('./pages/game-board/game-board.component'), canActivate: [authGuard] },
  { path: '**', redirectTo: 'game-selection' }
];

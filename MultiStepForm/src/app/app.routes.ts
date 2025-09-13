import { Routes } from '@angular/router';
import { stepGuard } from 'shared/guard/step-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'step-1', pathMatch: 'full' },
  { path: 'step-1', loadComponent: () => import('./steps/step-1/step-1'), canActivate: [stepGuard] },
  { path: 'step-2', loadComponent: () => import('./steps/step-2/step-2'), canActivate: [stepGuard] },
  { path: 'step-3', loadComponent: () => import('./steps/step-3/step-3'), canActivate: [stepGuard] },
  { path: 'step-4', loadComponent: () => import('./steps/step-4/step-4'), canActivate: [stepGuard] },
  { path: 'final-step', loadComponent: () => import('./steps/final-step/final-step'), canActivate: [stepGuard] },
  { path: '**', redirectTo: 'step-1' }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'ticket-generator', pathMatch: 'full'
    },
    {
        path: 'ticket-generator', loadComponent: () => import('./ticket-generator/ticket-generator.component')
    },
    {
        path: 'ticket-generated', loadComponent: () => import('./ticket-generated/ticket-generated.component')
    },
    {
        path: '**', redirectTo: 'ticket-generator'
    }
];

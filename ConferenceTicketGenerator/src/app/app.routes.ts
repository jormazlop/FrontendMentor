import { Routes } from '@angular/router';
import { ticketGuard } from './guards/ticket.guard';

export const routes: Routes = [
    {
        path: '', redirectTo: 'ticket-generator', pathMatch: 'full'
    },
    {
        path: 'ticket-generator', loadComponent: () => import('./ticket-generator/ticket-generator.component')
    },
    {
        path: 'ticket-generated', loadComponent: () => import('./ticket-generated/ticket-generated.component'),
        canActivate: [ticketGuard]
    },
    {
        path: '**', redirectTo: 'ticket-generator'
    }
];

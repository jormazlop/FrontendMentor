import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TicketService } from '../services/ticket.service';

export const ticketGuard: CanActivateFn = () => {

  const ticket = inject(TicketService).ticket;
  const router = inject(Router);

  if (ticket()) {
    return true;
  } else {
    router.navigate(['/ticket-generator']);
    return false;
  }
};

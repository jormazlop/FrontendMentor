import { Injectable, signal } from '@angular/core';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private _ticket = signal<Ticket | null>(null);

  readonly ticket = this._ticket.asReadonly();


  generateTicket(ticket: Ticket): void {
    this._ticket.set(ticket);
  }

}

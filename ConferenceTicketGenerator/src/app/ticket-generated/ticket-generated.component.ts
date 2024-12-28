import { Component, inject } from '@angular/core';
import { TicketComponent } from './ticket/ticket.component';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket-generated',
  imports: [TicketComponent],
  templateUrl: './ticket-generated.component.html',
  styleUrl: './ticket-generated.component.scss'
})
export default class TicketGeneratedComponent {

  ticket = inject(TicketService).ticket;

  constructor() {
    console.log(this.ticket())
  }
}

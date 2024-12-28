import { Component, computed, inject, signal } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket',
  imports: [LogoComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss',
})
export class TicketComponent {
  ticket = inject(TicketService).ticket;

  day = () => {
    const d = new Date(new Date().getFullYear() + 1, 1, 0);

    console.log(d);
    console.log(d.getDate());

    return d.getDate();
  };

  date = signal<string>(`Jan ${ this.day() }, ${new Date().getFullYear() + 1} / Austin, TX`);

  imgUrl = computed(() => {
    let imageSrc: string | null = null;

    const file = this.ticket()?.avatar;

    if (file) {
      imageSrc = URL.createObjectURL(file);
    }

    this.day();

    return imageSrc;
  });
}

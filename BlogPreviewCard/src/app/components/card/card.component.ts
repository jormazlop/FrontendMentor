import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  providers: [DatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  todayDate;
  datePipe = inject(DatePipe);

  constructor() {
    this.todayDate = this.datePipe.transform(new Date(), 'dd MMM YYYY');
  }
}

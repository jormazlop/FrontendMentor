import { Component, signal } from '@angular/core';
import { CardButtonComponent } from './card-button/card-button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  buttons = signal(["Github", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"]);
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: true,
  imports: [],
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  spanCount = signal([1,2,3,4]);
}

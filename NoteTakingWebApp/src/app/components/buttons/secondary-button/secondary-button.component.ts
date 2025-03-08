import { Component, input } from '@angular/core';

@Component({
  selector: 'note-secondary-button',
  imports: [],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.scss'
})
export class SecondaryButtonComponent {
  type = input<HTMLButtonElement["type"]>('button');
}

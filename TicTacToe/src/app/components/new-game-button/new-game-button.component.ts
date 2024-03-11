import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-game-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './new-game-button.component.html',
  styleUrl: './new-game-button.component.scss',
})
export class NewGameButtonComponent {

  @Input() type: 'yellow' | 'blue' = 'yellow';

}

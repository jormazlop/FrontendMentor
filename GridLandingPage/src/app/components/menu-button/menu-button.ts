import { Component, input, output } from '@angular/core';
import { KeyboardButtonDirective } from '@directives/keyboard-button-directive';

@Component({
  selector: 'app-menu-button',
  imports: [],
  templateUrl: './menu-button.html',
  styleUrl: './menu-button.scss',
  host: {
    'aria-label': 'Open/Close menu',
    title: 'Open/Close menu',
  },
  hostDirectives: [
    {
      directive: KeyboardButtonDirective,
      outputs: ['pressed'],
    },
  ],
})
export class MenuButton {

  menuOpened = input.required<boolean>();
}

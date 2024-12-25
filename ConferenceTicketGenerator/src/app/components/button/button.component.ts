import { Component, input } from '@angular/core';

export type ButtonType = HTMLButtonElement['type'];

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  type = input<ButtonType>('button');
}

import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

export type ButtonType = 'blue' | 'red';

@Component({
  selector: 'note-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
  imports: [NgClass]
})
export class PrimaryButtonComponent {
  disabled = input<boolean>(false);

  color = input<ButtonType>('blue');

  type = input<HTMLButtonElement["type"]>('button');
}

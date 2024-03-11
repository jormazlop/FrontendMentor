import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-modal-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal-button.component.html',
  styleUrl: './modal-button.component.scss'
})
export class ModalButtonComponent {
  type = input<'silver' | 'yellow'>('silver');
}

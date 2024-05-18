import { NgClass } from '@angular/common';
import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  type = input<'primary' | 'secondary'>('primary');
}

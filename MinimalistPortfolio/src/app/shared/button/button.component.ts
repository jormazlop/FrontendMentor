import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  type = input<'primary' | 'secondary'| 'tertiary'>('primary');

  primary = computed(() => this.type() === 'primary');

  button = computed(() => this.type() === 'tertiary' ? 'submit' : 'button');
}

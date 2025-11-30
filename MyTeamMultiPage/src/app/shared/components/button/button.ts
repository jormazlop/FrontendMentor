import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  disabled = input(false);
  type = input<'primary' | 'secondary'>('primary');
  primary = computed(() => this.type() === 'primary');
  secondary = computed(() => this.type() === 'secondary');
}

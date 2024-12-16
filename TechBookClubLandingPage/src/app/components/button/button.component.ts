import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

export type TypeButton = 'primary'| 'primary-1' | 'secondary';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  type = input<TypeButton>('primary');

  image = computed(() => {
    switch (this.type()) {
      case 'primary':
        return 'images/icon-arrow-down.svg';
      case 'secondary':
        return 'images/icon-arrow-up.svg'
      default:
        return '';
    }
  });
}

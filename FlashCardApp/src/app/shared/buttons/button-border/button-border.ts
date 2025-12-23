import { Component, computed, input } from '@angular/core';
import { IconChevronLeft } from '@shared/icons/icon-chevron-left/icon-chevron-left';
import { IconChevronRight } from '@shared/icons/icon-chevron-right/icon-chevron-right';

@Component({
  selector: 'button-border',
  imports: [IconChevronLeft, IconChevronRight],
  templateUrl: './button-border.html',
  styleUrl: './button-border.scss',
})
export class ButtonBorder {
  type = input.required<'left' | 'right'>();

  left = computed(() => this.type() === 'left');
  right = computed(() => this.type() === 'right');
}

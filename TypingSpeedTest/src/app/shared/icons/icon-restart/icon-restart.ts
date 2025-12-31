import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'icon-restart',
  templateUrl: './icon-restart.svg',
  styleUrl: './icon-restart.scss',
})
export class IconRestart {
  type = input<'dark' | 'light'>('dark');
  light = computed(() => this.type() === 'light');
}

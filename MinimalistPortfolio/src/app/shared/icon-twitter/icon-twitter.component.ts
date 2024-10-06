import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-twitter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './icon-twitter.component.html',
  styleUrl: './icon-twitter.component.scss'
})
export class IconTwitterComponent {
  type = input<'primary' | 'secondary'>('primary');
}

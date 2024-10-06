import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-linkedin',
  standalone: true,
  imports: [NgClass],
  templateUrl: './icon-linkedin.component.html',
  styleUrl: './icon-linkedin.component.scss'
})
export class IconLinkedinComponent {
  type = input<'primary' | 'secondary'>('primary');
}

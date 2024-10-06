import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-github',
  standalone: true,
  imports: [NgClass],
  templateUrl: './icon-github.component.html',
  styleUrl: './icon-github.component.scss'
})
export class IconGithubComponent {

  type = input<'primary' | 'secondary'>('primary');
}

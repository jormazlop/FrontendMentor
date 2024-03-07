import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dark-icon',
  standalone: true,
  imports: [],
  templateUrl: './dark-icon.component.html',
  styleUrl: './dark-icon.component.scss'
})
export class DarkIconComponent {
  mode$ = input<boolean>();
}

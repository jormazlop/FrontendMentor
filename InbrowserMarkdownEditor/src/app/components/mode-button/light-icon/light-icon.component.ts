import { Component, input } from '@angular/core';

@Component({
  selector: 'app-light-icon',
  standalone: true,
  imports: [],
  templateUrl: './light-icon.component.html',
  styleUrl: './light-icon.component.scss'
})
export class LightIconComponent {
  mode$ = input<boolean>();
}

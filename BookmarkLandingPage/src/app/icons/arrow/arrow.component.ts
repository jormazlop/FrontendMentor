import { Component, input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss'
})
export class ArrowComponent {
  active = input(false);
}

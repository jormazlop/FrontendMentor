import { Component, input } from '@angular/core';

@Component({
  selector: 'app-check-item',
  imports: [],
  templateUrl: './check-item.component.html',
  styleUrl: './check-item.component.scss'
})
export class CheckItemComponent {
  text = input.required<string>();
}

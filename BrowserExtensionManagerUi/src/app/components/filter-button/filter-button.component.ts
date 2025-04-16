import { Component, input } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  imports: [],
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.scss'
})
export class FilterButtonComponent {
  active = input.required();
  disabled = input(false);
}

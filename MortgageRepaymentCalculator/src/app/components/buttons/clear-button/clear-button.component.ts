import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-clear-button',
  standalone: true,
  imports: [],
  templateUrl: './clear-button.component.html',
  styleUrl: './clear-button.component.scss'
})
export class ClearButtonComponent {

  title = input.required<string>();

  onClick = output();

  clickButton(): void {
    this.onClick.emit();
  }
}

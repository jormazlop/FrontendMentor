import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-switch-button',
  imports: [],
  templateUrl: './switch-button.component.html',
  styleUrl: './switch-button.component.scss'
})
export class SwitchButtonComponent {

  active = input.required<boolean>();
  switch = output();

  onClick(): void {
    this.switch.emit();
  }

}

import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {
  open = input(false);

  clickEv = output();

  onClick(): void {
    this.clickEv.emit();
  }
}

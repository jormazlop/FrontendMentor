import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {

  open = input(false);
  clickMenu = output();

  onClick(): void {
    this.clickMenu.emit();
  }
}

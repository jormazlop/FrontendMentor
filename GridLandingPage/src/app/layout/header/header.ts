import { Component, model } from '@angular/core';
import { Logo } from '@components/logo/logo';
import { MenuButton } from '@components/menu-button/menu-button';

@Component({
  selector: 'app-header',
  imports: [Logo, MenuButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  menuOpened = model.required<boolean>();

  onMenuButtonPressed() {
    this.menuOpened.update(value => !value);
  }
}

import { Component, output } from '@angular/core';
import { IconSun } from '@components/icons/icon-sun/icon-sun';

@Component({
  selector: 'foreign-theme-button',
  imports: [IconSun],
  templateUrl: './theme-button.html',
  styleUrl: './theme-button.scss',
})
export class ThemeButton {
  clickTheme = output();

  onClickTheme(): void {
    this.clickTheme.emit();
  }
}

import { Component, inject } from '@angular/core';
import { Theme } from '@services/theme';

@Component({
  imports: [],
  selector: 'app-mode',
  styleUrl: './mode.scss',
  templateUrl: './mode.html',
})
export class Mode {
  private readonly themeService = inject(Theme);
  theme = this.themeService.theme;

  protected changeTheme(): void {
    this.themeService.toggleTheme();
  }
}

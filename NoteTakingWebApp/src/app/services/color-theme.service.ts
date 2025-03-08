import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';
import { ColorTheme } from 'app/models/color-theme.model';

@Injectable({
  providedIn: 'root',
})
export class ColorThemeService {
  private document = inject(DOCUMENT);

  private _color = signal<ColorTheme>('system');
  readonly color = this._color.asReadonly();

  private colorThemeEffect = effect(() => {
    switch (this._color()) {
      case 'light':
        this.document.body.classList.add('light');
        this.document.body.classList.remove('dark');
        break;
      case 'dark':
        this.document.body.classList.add('dark');
        this.document.body.classList.remove('light');
        break;
      case 'system':
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.document.body.classList.add('dark');
          this.document.body.classList.remove('light');
        } else {
          this.document.body.classList.add('light');
          this.document.body.classList.remove('dark');
        }
        break;
    }
  });

  setMode(color: ColorTheme): void {
    this._color.set(color);
  }
}

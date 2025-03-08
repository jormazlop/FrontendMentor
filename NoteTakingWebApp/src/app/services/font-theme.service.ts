import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';
import { FontTheme } from '@models/font-theme.model';

@Injectable({
  providedIn: 'root',
})
export class FontThemeService {
  private document = inject(DOCUMENT);

  private _font = signal<FontTheme>('sans-serif');
  readonly font = this._font.asReadonly();

  private fontThemeEffect = effect(() => {
    switch (this._font()) {
      case 'sans-serif':
        this.document.body.style.fontFamily = 'Inter';
        break;
      case 'serif':
        this.document.body.style.fontFamily = 'NotoSerif';
        break;
      case 'monospace':
        this.document.body.style.fontFamily = 'SourceCodePro';
        break;
    }
  });

  setMode(font: FontTheme): void {
    this._font.set(font);
  }
}

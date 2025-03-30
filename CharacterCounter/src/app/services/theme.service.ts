import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _isDark = signal(false);
  isDark = this._isDark.asReadonly();
  private mode = computed(() => this._isDark() ? "dark" : "light");

  constructor() {
    effect(() => {
      document.getElementsByTagName("body")[0].classList.remove("light");
      document.getElementsByTagName("body")[0].classList.remove("dark");
      document.getElementsByTagName("body")[0].classList.add(this.mode());
    });
  }

  setMode(): void {
    this._isDark.update(val => !val);
  }

}

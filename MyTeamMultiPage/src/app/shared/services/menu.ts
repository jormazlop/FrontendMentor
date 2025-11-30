import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Menu {
  private readonly _menu = signal(false);
  menu = this._menu.asReadonly();

  changeMenu(): void {
    this._menu.update((val) => !val);
  }
}

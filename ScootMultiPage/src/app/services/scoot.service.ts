import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScootService {

  private _menu = signal(false);
  readonly menu = this._menu.asReadonly();

  clickMenu(): void {
    this._menu.update(val => !val);
  }
}

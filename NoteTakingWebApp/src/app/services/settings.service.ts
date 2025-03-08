import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _opened = signal(true);
  opened = this._opened.asReadonly();

  menu(): void {
    this._opened.update(val => !val);
  }
}

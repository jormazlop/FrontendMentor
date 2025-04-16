import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _mode = signal<'light' | 'dark'>('light');
  mode = this._mode.asReadonly();

  constructor() {
    const body = document.body;
    effect(() => {
      switch(this.mode()) {
        case 'light':
          body.classList.add('light');
          body.classList.remove('dark');
          break;
        case 'dark':
          body.classList.add('dark');
          body.classList.remove('light');
          break;
      }
    });
  }


  changeMode(): void {
    this._mode.update(val => val == 'light' ? 'dark' : 'light');
  }


}

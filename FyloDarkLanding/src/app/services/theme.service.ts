import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  darkTheme: WritableSignal<boolean> = signal(true);

  changeTheme(): void {
    this.darkTheme.update((value) => !value);
  }
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private theme = signal(1);
  readonly theme$ = this.theme.asReadonly();

  changeTheme(theme: number): void {
    this.theme.set(theme);
  }
}

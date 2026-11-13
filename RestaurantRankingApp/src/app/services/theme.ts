import { Service, signal } from '@angular/core';

@Service()
export class Theme {

  theme = signal<'light' | 'dark'>('light');

  toggleTheme(): void {
    const currentTheme = this.theme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.theme.set(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }
}

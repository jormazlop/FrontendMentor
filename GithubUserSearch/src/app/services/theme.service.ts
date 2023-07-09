import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = new BehaviorSubject<string>('theme-light');

  constructor() { }

  getTheme(): Observable<string> {
    return this.theme.asObservable();
  }

  setTheme(theme: string) {
    this.theme.next(theme);
  }
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  private mode = signal<'light' | 'dark'>('light');
  readonly mode$ = this.mode.asReadonly();

  changeMode(): void {
    this.mode.update(val => val === 'light' ? 'dark' : 'light');
  }
}

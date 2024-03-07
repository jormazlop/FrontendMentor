import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  private mode = signal(false);
  readonly mode$ = this.mode.asReadonly();

  changeMode(): void {
    this.mode.update(value => !value)
  }
}

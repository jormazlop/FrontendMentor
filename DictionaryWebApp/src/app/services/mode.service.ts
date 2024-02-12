import { Injectable, Signal, WritableSignal, signal } from '@angular/core';

export type Fonts = 'Sans Serif' | 'Serif' | 'Monospace';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  private font$: WritableSignal<Fonts> = signal('Sans Serif')

  private mode$: WritableSignal<boolean> = signal(false);

  get font(): Signal<Fonts> {
    return this.font$.asReadonly();
  }

  set font(font: Fonts) {
    this.font$.set(font);
  }

  get mode(): Signal<boolean> {
    return this.mode$.asReadonly();
  }

  set mode(mode: boolean) {
    this.mode$.set(mode);
  }
}

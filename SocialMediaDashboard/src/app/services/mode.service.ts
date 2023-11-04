import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  mode = signal<boolean>(false);

  setMode(mode: boolean): void {
    this.mode.set(mode);
  }

  getMode(): WritableSignal<boolean> {
    return this.mode;
  }

}

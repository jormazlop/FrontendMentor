import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  private progress = signal(0);
  readonly progress$ = this.progress.asReadonly();

  private started = signal(false);
  readonly started$ = this.started.asReadonly();

  private interval: any;

  startSlide(): void {
    this.started.set(true);
    this.interval = setInterval(() => {
        this.progress.update(val => val + 0.1);
      }, 10);
  }

  stopSlide(): void {
    this.started.set(false);
    clearInterval(this.interval);
  }

  initSlide(): void {
    this.progress.set(0);
  }

}

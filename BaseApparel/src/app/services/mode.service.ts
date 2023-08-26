import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  private darkMode = new Subject<boolean>();

  constructor() {
    this.darkMode.next(false);
  }

  getMode(): Observable<boolean> {
    return this.darkMode.asObservable();
  }

  setMode(mode: boolean): void {
    this.darkMode.next(mode);
  }
}

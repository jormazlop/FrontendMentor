import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private _section = signal('home');
  section = this._section.asReadonly();

  setSection(newSection: string): void {
    this._section.set(newSection);
  }
}

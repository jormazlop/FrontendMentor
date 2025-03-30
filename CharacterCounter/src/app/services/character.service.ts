import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private _characters = signal('');
  characters = this._characters.asReadonly();
  private _excludeSpace = signal(false);
  excludeSpace = this._excludeSpace.asReadonly();
  private _charLimit = signal(false);
  charLimit = this._charLimit.asReadonly();

  readingTime = computed(() => {
    const wpm = 225;
    const words = this._characters().trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  });

  chars = (() => {
    return this._characters().split('').filter(c => this._excludeSpace() ? c.trim(): c).length.toString();
  });

  words = computed(() => {

    if(!this._characters()) return '0';

    const words = this._characters().split(' ');

    return (words.filter(w => w).length).toString();
  });

  sentences = computed(() => {

    if(!this._characters()) return '0';

    const words = this._characters().split('.');

    return (words.filter(w => w).length).toString();
  });

  setCharacters(value: string): void {
    this._characters.set(value);
  }

  setExcludeSpaces(value: boolean): void {
    this._excludeSpace.set(value);
  }

  setCharacterLimit(value: boolean): void {
    this._charLimit.set(value)
  }

}

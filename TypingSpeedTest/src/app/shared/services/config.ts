import { Injectable, signal } from '@angular/core';
import { Language, Mode, Sound } from '@shared/models/config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly _languages = signal<Language[]>(['english', 'spanish', 'french', 'italian']);
  readonly languages = this._languages.asReadonly();

  private readonly _modes = signal<Mode[]>(['dark', 'light', 'system']);
  readonly modes = this._modes.asReadonly();

  private readonly _sounds = signal<Sound[]>(['on', 'off']);
  readonly sounds = this._sounds.asReadonly();

  private readonly _languageSelected = signal<Language>('english');
  readonly languageSelected = this._languageSelected.asReadonly();

  private readonly _modeSelected = signal<Mode>('dark');
  readonly modeSelected = this._modeSelected.asReadonly();

  private readonly _soundSelected = signal<Sound>('off');
  readonly soundSelected = this._soundSelected.asReadonly();

  setLanguageSelected(language: Language): void {
    this._languageSelected.set(language);
  }

  setModeSelected(mode: Mode): void {
    this._modeSelected.set(mode);
  }

  setSoundSelected(sound: Sound): void {
    this._soundSelected.set(sound);
  }
}

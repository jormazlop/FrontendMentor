import { effect, inject, Injectable, signal } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Language, Mode, Sound } from '@shared/models/config.model';
import { Typing } from './typing';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  private readonly translocoService = inject(TranslocoService);
  private readonly typingService = inject(Typing);

  private readonly _languages = signal<Language[]>(['en', 'es', 'fr', 'it']);
  readonly languages = this._languages.asReadonly();

  private readonly _modes = signal<Mode[]>(['dark', 'light', 'system']);
  readonly modes = this._modes.asReadonly();

  private readonly _sounds = signal<Sound[]>(['on', 'off']);
  readonly sounds = this._sounds.asReadonly();

  private readonly _languageSelected = signal<Language>('en');
  readonly languageSelected = this._languageSelected.asReadonly();

  private readonly _modeSelected = signal<Mode>('dark');
  readonly modeSelected = this._modeSelected.asReadonly();

  private readonly _soundSelected = signal<Sound>('off');
  readonly soundSelected = this._soundSelected.asReadonly();

  private readonly effect = effect(() => {
    this.translocoService.setActiveLang(this.languageSelected());
    this.typingService.getData(this.languageSelected());
  });

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

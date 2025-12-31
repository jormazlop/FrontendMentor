export type Difficulty = 'easy' | 'medium' | 'hard';

export type Timer = 'timed' | 'passage';

export type Language = 'en' | 'es' | 'fr' | 'it';
export type Mode = 'dark' | 'light' | 'system';
export type Sound = 'on' | 'off';


export class ConfigModel {
  language: Language;
  mode: Mode;
  sound: Sound;

  constructor() {
    this.language = 'en';
    this.mode = 'dark';
    this.sound = 'off';
  }
}

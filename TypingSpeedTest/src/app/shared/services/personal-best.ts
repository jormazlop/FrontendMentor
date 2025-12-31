import { inject, Injectable, signal } from '@angular/core';
import { PersonalBestModel } from '@shared/models/personal-best.model';
import { Storage } from './storage';

@Injectable({
  providedIn: 'root',
})
export class PersonalBest {
  private readonly _personalBest = signal<PersonalBestModel>(new PersonalBestModel());
  readonly personalBest = this._personalBest.asReadonly();
  private readonly storage = inject(Storage);

  constructor() {
    const personalBest = this.storage.getLocalPersonalBest() ?? new PersonalBestModel();
    this._personalBest.set(personalBest);
  }

  setPersonalBest(personalBest: PersonalBestModel): void {
    this._personalBest.set(personalBest);
    this.storage.setLocalPersonalBest(personalBest);
  }
}

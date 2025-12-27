import { Injectable, signal } from '@angular/core';
import { PersonalBestModel } from '@shared/models/personal-best.model';

@Injectable({
  providedIn: 'root',
})
export class PersonalBest {
  private readonly _personalBest = signal<PersonalBestModel>(new PersonalBestModel());
  readonly personalBest = this._personalBest.asReadonly();

  setPersonalBest(personalBest: PersonalBestModel): void {
    this._personalBest.set(personalBest);
  }
}

import { Injectable } from '@angular/core';
import { ConfigModel } from '@shared/models/config.model';
import { PersonalBestModel } from '@shared/models/personal-best.model';

@Injectable({
  providedIn: 'root',
})
export class Storage {
  private CONFIG_KEY = 'config';
  private PERSONAL_BEST_KEY = 'personal_best';

  setLocalConfig(config: ConfigModel): void {
    localStorage.setItem(this.CONFIG_KEY, JSON.stringify(config));
  }

  setLocalPersonalBest(personalBest: PersonalBestModel): void {
    localStorage.setItem(this.PERSONAL_BEST_KEY, JSON.stringify(personalBest));
  }

  getLocalConfig(): ConfigModel | null {
    const config = localStorage.getItem(this.CONFIG_KEY);
    return config ? JSON.parse(config) : null;
  }

  getLocalPersonalBest(): PersonalBestModel | null {
    const personalBest = localStorage.getItem(this.PERSONAL_BEST_KEY);
    return personalBest ? JSON.parse(personalBest) : null;
  }
}

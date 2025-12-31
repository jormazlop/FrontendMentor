import { Component, inject, model } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigOptions } from '@config/config-options/config-options';
import { TranslocoPipe } from '@jsverse/transloco';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { ButtonSecondary } from '@shared/buttons/button-secondary/button-secondary';
import { ConfigModel, Language, Mode, Sound } from '@shared/models/config.model';
import { ConfigService } from '@shared/services/config';
import { Storage } from '@shared/services/storage';

@Component({
  selector: 'app-config',
  imports: [ConfigOptions, ButtonPrimary, ButtonSecondary, TranslocoPipe],
  templateUrl: './config.html',
  styleUrl: './config.scss',
})
export default class Config {

  private readonly service = inject(ConfigService);
  private readonly storage = inject(Storage);
  private readonly router = inject(Router);

  languages = this.service.languages;
  languageSelected = model<Language>(this.service.languageSelected());

  modes = this.service.modes;
  modeSelected = model<Mode>(this.service.modeSelected());

  sounds = this.service.sounds;
  soundSelected = model<Sound>(this.service.soundSelected());

  onReturn(): void {
    this.router.navigate(['../']);
  }

  onSaveOptions(): void {
    this.service.setLanguageSelected(this.languageSelected());
    this.service.setModeSelected(this.modeSelected());
    this.service.setSoundSelected(this.soundSelected());

    const config = new ConfigModel();
    config.language = this.languageSelected();
    config.mode = this.modeSelected();
    config.sound = this.soundSelected();
    this.storage.setLocalConfig(config);
  }
}

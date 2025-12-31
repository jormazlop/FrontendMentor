import { AsyncPipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { Language, Mode, Sound } from '@shared/models/config.model';
import { ConfigPipe } from '@shared/pipes/config-pipe';
import { ConfigService } from '@shared/services/config';

@Component({
  selector: 'app-config-options',
  imports: [ConfigPipe, AsyncPipe],
  templateUrl: './config-options.html',
  styleUrl: './config-options.scss',
})
export class ConfigOptions {
  sound = inject(ConfigService).soundSelected;
  options = input.required<Language[] | Mode[] | Sound[]>();

  selected = input<Language | Mode | Sound>();
  selectedChange = output<Language | Mode | Sound>();

  onSelectOption(option: Language | Mode | Sound): void {
    this.selectedChange.emit(option);
    if(this.sound() === 'off') return;
    let audio = new Audio();
    audio.src = '../../../audio/select.wav';
    audio.load();
    audio.play();
  }
}

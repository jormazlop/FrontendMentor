import { Component, computed, inject } from '@angular/core';
import { IconRestart } from '../../icons/icon-restart/icon-restart';
import { ConfigService } from '@shared/services/config';

@Component({
  selector: 'button-secondary',
  imports: [IconRestart],
  templateUrl: './button-secondary.html',
  styleUrl: './button-secondary.scss',
})
export class ButtonSecondary {
  sound = inject(ConfigService).soundSelected;

  playAudio(): void {
    if(this.sound() === 'off') return;
    let audio = new Audio();
    audio.src = '../../../audio/click.wav';
    audio.load();
    audio.play();
  }
}

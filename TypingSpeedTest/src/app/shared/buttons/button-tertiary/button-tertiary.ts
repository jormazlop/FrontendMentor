import { Component, inject } from '@angular/core';
import { IconRestart } from '../../icons/icon-restart/icon-restart';
import { ConfigService } from '@shared/services/config';

@Component({
  selector: 'button-tertiary',
  imports: [IconRestart],
  templateUrl: './button-tertiary.html',
  styleUrl: './button-tertiary.scss',
})
export class ButtonTertiary {
  sound = inject(ConfigService).soundSelected;

  playAudio(): void {
    if(this.sound() === 'off') return;
    let audio = new Audio();
    audio.src = '../../../audio/click.wav';
    audio.load();
    audio.play();
  }
}

import { Component, inject } from '@angular/core';
import { ConfigService } from '@shared/services/config';

@Component({
  selector: 'button-primary',
  templateUrl: './button-primary.html',
  styleUrl: './button-primary.scss',
})
export class ButtonPrimary {
  sound = inject(ConfigService).soundSelected;

  playAudio(): void {
    if(this.sound() === 'off') return;
    let audio = new Audio();
    audio.src = '../../../audio/click.wav';
    audio.load();
    audio.play();
  }
}

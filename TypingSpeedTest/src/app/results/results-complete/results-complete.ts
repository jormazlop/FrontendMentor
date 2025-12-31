import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { ButtonSecondary } from '@shared/buttons/button-secondary/button-secondary';
import { IconCompleted } from '@shared/icons/icon-completed/icon-completed';
import { PersonalBestModel } from '@shared/models/personal-best.model';
import { PatternStar1 } from '@shared/patterns/pattern-star-1/pattern-star-1';
import { PatternStar2 } from '@shared/patterns/pattern-star-2/pattern-star-2';
import { AccuracyPipe } from '@shared/pipes/accuracy.pipe';
import { ConfigService } from '@shared/services/config';
import { PersonalBest } from '@shared/services/personal-best';
import { Typing } from '@shared/services/typing';

@Component({
  selector: 'app-results-complete',
  imports: [
    ButtonSecondary,
    IconCompleted,
    PatternStar1,
    PatternStar2,
    AccuracyPipe,
    TranslocoPipe,
  ],
  templateUrl: './results-complete.html',
  styleUrl: './results-complete.scss',
})
export default class ResultsComplete {
  private readonly router = inject(Router);
  private readonly service = inject(Typing);
  private readonly sound = inject(ConfigService).soundSelected;

  resultat = signal(new PersonalBestModel());

  constructor() {
    this.resultat().accuracy = this.service.accuracy();
    this.resultat().wpm = this.service.wpm();
    this.resultat().correctCharacters = this.service.correctCount();
    this.resultat().incorrectCharacters = this.service.incorrectCount();
    if (this.sound() === 'on') this.playAudio();
  }

  private playAudio(): void {
    let audio = new Audio();
    audio.src = '../../../audio/defeat.wav';
    audio.load();
    audio.play();
  }

  onClickRepeat(): void {
    this.router.navigate(['../../home/not-started']);
  }
}

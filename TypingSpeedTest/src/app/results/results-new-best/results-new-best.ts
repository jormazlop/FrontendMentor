import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonSecondary } from '@shared/buttons/button-secondary/button-secondary';
import { IconNewPb } from '@shared/icons/icon-new-pb/icon-new-pb';
import { PersonalBestModel } from '@shared/models/personal-best.model';
import { AccuracyPipe } from '@shared/pipes/accuracy.pipe';
import { PersonalBest } from '@shared/services/personal-best';
import { Typing } from '@shared/services/typing';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-results-new-best',
  imports: [ButtonSecondary, IconNewPb, AccuracyPipe],
  templateUrl: './results-new-best.html',
  styleUrl: './results-new-best.scss',
})
export default class ResultsNewBest {
  private readonly router = inject(Router);
  private readonly service = inject(Typing);
  private readonly personalBest = inject(PersonalBest);

  pb = this.personalBest.personalBest;

  constructor() {
    const duration = 3000;

    confetti({
      particleCount: 150,
      spread: 200,
      origin: { y: 1 },
      colors: ['#d64d5b', '#4ca6ff', '#f4dc73'],
    });

    setTimeout(() => confetti.reset(), duration);

    const newBest = new PersonalBestModel();
    newBest.accuracy = this.service.accuracy();
    newBest.wpm = this.service.wpm();
    newBest.correctCharacters = this.service.correctCount();
    newBest.incorrectCharacters = this.service.incorrectCount();
    this.personalBest.setPersonalBest(newBest);
  }

  onClickRepeat(): void {
    this.router.navigate(['../../home/not-started']);
  }
}

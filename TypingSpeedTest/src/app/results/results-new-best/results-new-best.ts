import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonSecondary } from '@shared/buttons/button-secondary/button-secondary';
import { IconNewPb } from '@shared/icons/icon-new-pb/icon-new-pb';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-results-new-best',
  imports: [ButtonSecondary, IconNewPb],
  templateUrl: './results-new-best.html',
  styleUrl: './results-new-best.scss',
})
export default class ResultsNewBest {
  private readonly router = inject(Router);

  constructor() {
    const duration = 3000;

    confetti({
      particleCount: 150,
      spread: 200,
      origin: { y: 1 },
      colors: ['#d64d5b', '#4ca6ff', '#f4dc73'],
    });

    setTimeout(() => confetti.reset(), duration);
  }

  onClickRepeat(): void {
    this.router.navigate(['../../home/not-started']);
  }

}

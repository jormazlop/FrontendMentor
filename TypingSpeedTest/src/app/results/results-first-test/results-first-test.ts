import { PercentPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonSecondary } from '@shared/buttons/button-secondary/button-secondary';
import { IconCompleted } from '@shared/icons/icon-completed/icon-completed';
import { PersonalBestModel } from '@shared/models/personal-best.model';
import { PatternStar1 } from '@shared/patterns/pattern-star-1/pattern-star-1';
import { PatternStar2 } from '@shared/patterns/pattern-star-2/pattern-star-2';
import { AccuracyPipe } from '@shared/pipes/accuracy.pipe';
import { PersonalBest } from '@shared/services/personal-best';
import { Typing } from '@shared/services/typing';

@Component({
  selector: 'app-results-first-test',
  imports: [ButtonSecondary, IconCompleted, PatternStar1, PatternStar2, AccuracyPipe],
  templateUrl: './results-first-test.html',
  styleUrl: './results-first-test.scss',
})
export default class ResultsFirstTest {
  private readonly router = inject(Router);
  private readonly service = inject(Typing);
  private readonly personalBest = inject(PersonalBest);

  pb = this.personalBest.personalBest;

  constructor() {
    const newBest = new PersonalBestModel();
    newBest.accuracy = this.service.accuracy();
    newBest.wpm = this.service.wpm();
    newBest.correctCharacters = this.service.correctCount();
    newBest.incorrectCharacters = this.service.incorrectCount();
    this.personalBest.setPersonalBest(newBest);
  }

  onClickRepeat(): void {
    this.router.navigate(['../../home/not-started'])
  }
}

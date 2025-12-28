import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonSecondary } from '@shared/buttons/button-secondary/button-secondary';
import { IconCompleted } from '@shared/icons/icon-completed/icon-completed';
import { PatternStar1 } from '@shared/patterns/pattern-star-1/pattern-star-1';
import { PatternStar2 } from '@shared/patterns/pattern-star-2/pattern-star-2';

@Component({
  selector: 'app-results-complete',
  imports: [ButtonSecondary, IconCompleted, PatternStar1, PatternStar2],
  templateUrl: './results-complete.html',
  styleUrl: './results-complete.scss',
})
export default class ResultsComplete {
  private readonly router = inject(Router);

  onClickRepeat(): void {
    this.router.navigate(['../../home/not-started'])
  }
}

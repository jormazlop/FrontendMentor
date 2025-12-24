import { Component, effect, inject, signal } from '@angular/core';
import { ButtonPrimary } from '@shared/buttons/button-primary/button-primary';
import { ButtonSecondary } from '@shared/buttons/button-secondary/button-secondary';
import { PatternStarBlue } from '@shared/patterns/pattern-star-blue/pattern-star-blue';
import { PatternStarYellow } from '@shared/patterns/pattern-star-yellow/pattern-star-yellow';
import { Tag } from '@shared/tag/tag';
import { FlashcardService } from 'service/flashcard.service';

@Component({
  selector: 'study-card-body',
  imports: [PatternStarBlue, PatternStarYellow, Tag, ButtonPrimary, ButtonSecondary],
  templateUrl: './study-card-body.html',
  styleUrl: './study-card-body.scss',
})
export class StudyCardBody {
  private readonly service = inject(FlashcardService);
  selectedCard = this.service.selectedCard;
  answer = signal(false);

  effect = effect(() => {
    this.selectedCard()?.id;
    this.answer.set(false);
  });

  onShowAnswer(): void {
    this.answer.set(true);
  }

  onKnowClick(): void {
    this.service.onKnowCard(this.selectedCard()!.id);
  }

  onResetProgress(): void {
    this.service.onResetProgress(this.selectedCard()!.id);
    this.answer.set(false);
  }
}

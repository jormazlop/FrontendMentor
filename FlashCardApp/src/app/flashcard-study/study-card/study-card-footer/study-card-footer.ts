import { Component, inject } from '@angular/core';
import { ButtonBorder } from '@shared/buttons/button-border/button-border';
import { FlashcardService } from 'service/flashcard.service';

@Component({
  selector: 'study-card-footer',
  imports: [ButtonBorder],
  templateUrl: './study-card-footer.html',
  styleUrl: './study-card-footer.scss',
})
export class StudyCardFooter {

  private readonly service = inject(FlashcardService);

  index = this.service.index;
  total = this.service.total;

  nextCard(): void {
    this.service.nextCard();
  }

  previousCard(): void {
    this.service.previousCard();
  }
}

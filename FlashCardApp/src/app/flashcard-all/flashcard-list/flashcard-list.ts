import { Component, inject } from '@angular/core';
import { FlashcardItem } from './flashcard-item/flashcard-item';
import { FlashcardService } from 'service/flashcard.service';

@Component({
  selector: 'flashcard-list',
  imports: [FlashcardItem],
  templateUrl: './flashcard-list.html',
  styleUrl: './flashcard-list.scss',
})
export class FlashcardList {
  filteredCards = inject(FlashcardService).filteredCards;
}

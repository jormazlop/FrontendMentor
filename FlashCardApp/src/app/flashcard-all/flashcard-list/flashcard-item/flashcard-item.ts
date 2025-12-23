import { Component, input } from '@angular/core';
import { Tag } from '@shared/tag/tag';
import { FlashcardModel } from 'model/flashcard.model';

@Component({
  selector: 'flashcard-item',
  imports: [Tag],
  templateUrl: './flashcard-item.html',
  styleUrl: './flashcard-item.scss',
})
export class FlashcardItem {
  card = input.required<FlashcardModel>();
}

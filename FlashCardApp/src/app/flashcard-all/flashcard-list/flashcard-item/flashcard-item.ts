import { Component, input } from '@angular/core';
import { ButtonEdit } from '@shared/buttons/button-edit/button-edit';
import { MasteredTag } from '@shared/mastered-tag/mastered-tag';
import { Tag } from '@shared/tag/tag';
import { FlashcardModel } from 'model/flashcard.model';

@Component({
  selector: 'flashcard-item',
  imports: [Tag, MasteredTag, ButtonEdit],
  templateUrl: './flashcard-item.html',
  styleUrl: './flashcard-item.scss',
})
export class FlashcardItem {
  card = input.required<FlashcardModel>();
}

import { Component } from '@angular/core';
import { FlashcardEdit } from './flashcard-edit/flashcard-edit';
import { FlashcardFilter } from './flashcard-filter/flashcard-filter';
import { FlashcardList } from './flashcard-list/flashcard-list';

@Component({
  selector: 'flashcard-all',
  imports: [FlashcardEdit, FlashcardFilter, FlashcardList],
  templateUrl: './flashcard-all.html',
  styleUrl: './flashcard-all.scss',
})
export class FlashcardAll {

}

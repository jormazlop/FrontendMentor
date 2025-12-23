import { Component } from '@angular/core';
import { StudyCard } from './study-card/study-card';
import { StudyStatistics } from './study-statistics/study-statistics';

@Component({
  selector: 'flashcard-study',
  imports: [StudyCard, StudyStatistics],
  templateUrl: './flashcard-study.html',
  styleUrl: './flashcard-study.scss',
})
export class FlashcardStudy {
}

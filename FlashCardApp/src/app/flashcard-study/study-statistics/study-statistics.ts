import { Component, inject } from '@angular/core';
import { StudyStatisticsCard } from './study-statistics-card/study-statistics-card';
import { FlashcardService } from 'service/flashcard.service';

@Component({
  selector: 'study-statistics',
  imports: [StudyStatisticsCard],
  templateUrl: './study-statistics.html',
  styleUrl: './study-statistics.scss',
})
export class StudyStatistics {

  statTotal = inject(FlashcardService).statTotal;
  statMastered = inject(FlashcardService).statMastered;
  statInProgress = inject(FlashcardService).statInProgress;
  statNotStarted = inject(FlashcardService).statNonStarted;

}

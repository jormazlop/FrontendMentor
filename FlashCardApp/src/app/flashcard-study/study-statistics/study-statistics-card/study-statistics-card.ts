import { Component, computed, input } from '@angular/core';
import { IconStatsInProgress } from '@shared/icons/icon-stats-in-progress/icon-stats-in-progress';
import { IconStatsMastered } from '@shared/icons/icon-stats-mastered/icon-stats-mastered';
import { IconStatsNotStarted } from '@shared/icons/icon-stats-not-started/icon-stats-not-started';
import { IconStatsTotal } from '@shared/icons/icon-stats-total/icon-stats-total';

@Component({
  selector: 'study-statistics-card',
  imports: [IconStatsTotal, IconStatsMastered, IconStatsInProgress, IconStatsNotStarted],
  templateUrl: './study-statistics-card.html',
  styleUrl: './study-statistics-card.scss',
})
export class StudyStatisticsCard {
  type = input<'total' | 'mastered' | 'in-progress' | 'not-started'>('total');

  title = computed(() => {
    switch (this.type()) {
      case 'total':
        return 'Total Cards';
      case 'mastered':
        return 'Mastered';
      case 'in-progress':
        return 'In Progress';
      case 'not-started':
        return 'Not Started';
    }
  });

  stat = input.required<number>();
}

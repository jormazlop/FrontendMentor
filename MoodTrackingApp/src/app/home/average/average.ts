import { Component, computed, inject } from '@angular/core';
import { Chart } from './chart/chart';
import { MoodService } from '@shared/services/mood';
import { AveragePipe } from './pipes/average-pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-average',
  imports: [Chart, AveragePipe, NgClass],
  templateUrl: './average.html',
  styleUrl: './average.scss',
})
export class Average {

  private service = inject(MoodService);
  averageMood = this.service.averageMood;
  averageSleep = this.service.averageSleep;

  averageMoodImage = computed(() => {
    switch(this.averageMood().message) {
      case 'same':
        return '/images/icon-trend-same-dark.svg';
      case 'more':
        return '/images/icon-trend-increase-dark.svg';
      case 'less':
        return '/images/icon-trend-decrease-dark.svg';
    }
  });

  averageSleepImage = computed(() => {
    switch(this.averageSleep().message) {
      case 'same':
        return '/images/icon-trend-same-dark.svg';
      case 'more':
        return '/images/icon-trend-increase-dark.svg';
      case 'less':
        return '/images/icon-trend-decrease-dark.svg';
    }
  });

}

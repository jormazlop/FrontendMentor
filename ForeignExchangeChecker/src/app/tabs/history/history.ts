import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { Rate, RateHistory } from '@model/model';
import { Frankfurter } from '@services/frankfurter';
import { HistoryChart } from './history-chart/history-chart';
import { IconSpinner } from '@components/icons/icon-spinner/icon-spinner';

@Component({
  selector: 'foreign-history',
  imports: [DecimalPipe, HistoryChart, UpperCasePipe, IconSpinner],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export default class History {
  rateHistory = signal(new RateHistory());

  readonly periodOptions = ['1D', '1W', '1M', '3M', '1Y', '5Y'];
  readonly chartOptions = ['area' , 'line' , 'bar' , 'step'];


  periodSelected = signal('1D');
  chartSelected = signal('area');

  private readonly dateOffset = computed(() => {
    switch (this.periodSelected()) {
      case '1W':
        return 24 * 60 * 60 * 1000 * 7;
      case '1M':
        return 24 * 60 * 60 * 1000 * 30;
      case '3M':
        return 24 * 60 * 60 * 1000 * 90;
      case '1Y':
        return 24 * 60 * 60 * 1000 * 360;
      case '5Y':
        return 24 * 60 * 60 * 1000 * 1800;
      default:
        return 24 * 60 * 60 * 1000 * 1;
    }
  });

  private readonly service = inject(Frankfurter);

  private readonly toDate = new Date();
  private readonly fromDate = computed(() => new Date(this.toDate.getTime() - this.dateOffset()));

  changeRateResource = httpResource<Rate[]>(() =>
    this.service.rateHistoryUrl(
      this.service.modelBase(),
      this.service.modelQuote(),
      this.fromDate(),
      this.toDate,
    ),
  );

  constructor() {
    this.effectRateHistory();
  }

  private effectRateHistory(): void {
    effect(() => {
      const changeRate = this.changeRateResource
        .value()
        ?.slice()
        .sort((a, b) => a.date.localeCompare(b.date));

      untracked(() => {
        if (!changeRate?.length) {
          return;
        }

        const open = changeRate[0].rate;
        const last = changeRate[changeRate.length - 1].rate;
        const change = last - open;
        const percentageChange = open !== 0 ? (change / open) * 100 : 0;

        const rateHistory = new RateHistory();
        rateHistory.open = open;
        rateHistory.last = last;
        rateHistory.change = change;
        rateHistory.percentageChange = percentageChange;

        this.rateHistory.set(rateHistory);
      });
    });
  }
}

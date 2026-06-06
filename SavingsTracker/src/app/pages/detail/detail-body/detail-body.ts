import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Goal } from '@shared/model/model';

@Component({
  selector: 'app-detail-body',
  imports: [DecimalPipe, CurrencyPipe],
  templateUrl: './detail-body.html',
  styleUrl: './detail-body.scss',
})
export class DetailBody {
  goal = input.required<Goal>();

  monthlyDeposit = computed(() =>
    this.goal().deposits.reduce((acc, deposit) => acc + deposit.amount, 0),
  );

  percentage = computed(() => (this.monthlyDeposit() / this.goal().target) * 100);

  remaining = computed(() => this.goal().target - this.monthlyDeposit());

  completed = computed(() => this.percentage() >= 100);
}

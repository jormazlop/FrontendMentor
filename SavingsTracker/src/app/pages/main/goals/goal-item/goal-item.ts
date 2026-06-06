import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Goal } from '@shared/model/model';

@Component({
  selector: 'app-goal-item',
  imports: [DecimalPipe, CurrencyPipe, DatePipe],
  templateUrl: './goal-item.html',
  styleUrl: './goal-item.scss',
})
export class GoalItem {
  readonly goal = input.required<Goal>();

  monthlyDeposit = computed(() =>
    this.goal().deposits.reduce((acc, deposit) => acc + deposit.amount, 0),
  );

  percentage = computed(() => (this.monthlyDeposit() / this.goal().target) * 100);

  completed = computed(() => this.percentage() >= 100);
}

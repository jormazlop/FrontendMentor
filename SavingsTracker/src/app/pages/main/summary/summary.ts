import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { GoalService } from '@shared/services/goal';
import { MonthlySummary } from './model';
import { Goal } from '@shared/model/model';

@Component({
  selector: 'app-summary',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
})
export class Summary {
  private readonly goals = inject(GoalService).goals;
  totalSavings = computed(() => {
    return this.goals()
      .flatMap((goal) => goal.deposits)
      .reduce((total, savings) => total + savings.amount, 0);
  });

  goalsActive = computed(() => {
    return this.goals().filter(
      (goal) => goal.deposits.reduce((total, savings) => total + savings.amount, 0) < goal.target,
    ).length;
  });

  goalsCompleted = computed(() => {
    return this.goals().filter(
      (goal) => goal.deposits.reduce((total, savings) => total + savings.amount, 0) >= goal.target,
    ).length;
  });

  totalSavingsByMonth = computed(() => this.calculateTotalSavings(this.goals()));
  maxSavingsInMonth = computed(() => Math.max(...this.totalSavingsByMonth().map((summary) => summary.totalSavings)));

  private calculateTotalSavings(goals: Goal[]): MonthlySummary[] {
    const deposits = goals.flatMap((goal) => goal.deposits);
    const totalSavingsByMonth: MonthlySummary[] = [];

    const limit = window.innerWidth < 1200 ? 6 : 12;

    const now = new Date().getMonth();
    for (let i = 0; i < limit; i++) {
      const month = ((now + i) % 12) + 1;

      const savingForMonth: MonthlySummary = {
        month: new Date(2000, month - 1, 2),
        totalSavings: deposits
          .filter((deposit) => new Date(deposit.createdAt).getMonth() + 1 === month)
          .reduce((total, deposit) => total + deposit.amount, 0),
      };
      totalSavingsByMonth.push(savingForMonth);
    }

    return totalSavingsByMonth;
  }
}

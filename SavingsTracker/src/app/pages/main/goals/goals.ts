import { Component, computed, inject, signal } from '@angular/core';
import { ButtonSecondary } from '@shared/buttons/button-secondary/button-secondary';
import { IconSort } from '@shared/icons/icon-sort/icon-sort';
import { GoalService } from '@shared/services/goal';
import { GoalItem } from './goal-item/goal-item';
import { InputCheckbox } from '@shared/inputs/input-checkbox/input-checkbox';
import { form } from '@angular/forms/signals';
import { FormGoal } from './model';
import { Goal } from '@shared/model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goals',
  imports: [ButtonSecondary, IconSort, GoalItem, InputCheckbox],
  templateUrl: './goals.html',
  styleUrl: './goals.scss',
})
export class Goals {
  readonly goals = inject(GoalService).goals;
  readonly router = inject(Router);

  readonly goalsFiltered = computed(() => {
    let goals = [...this.goals()];

    switch (this.formModel().filter) {
      case 'In progress':
        goals = goals.filter(
          (goal) =>
            goal.deposits.length > 0 &&
            goal.deposits.reduce((acc, deposit) => acc + deposit.amount, 0) < goal.target,
        );
        break;
      case 'Completed':
        goals = goals.filter(
          (goal) => goal.deposits.reduce((acc, deposit) => acc + deposit.amount, 0) >= goal.target,
        );
        break;
      case 'Not started':
        goals = goals.filter((goal) => goal.deposits.length === 0);
        break;
      default:
        break;
    }

    switch (this.formModel().sort) {
      case 'Deadline (soonest first)':
        goals = goals.sort((a, b) => {
          if (!a.deadline) return 1;
          if (!b.deadline) return -1;
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        });
        break;
      case 'Progress (highest first)':
        goals = goals.sort((a, b) => {
          const progressA =
            a.deposits.reduce((acc, deposit) => acc + deposit.amount, 0) / a.target;
          const progressB =
            b.deposits.reduce((acc, deposit) => acc + deposit.amount, 0) / b.target;
          return progressB - progressA;
        });
        break;
      case 'Progress (lowest first)':
        goals = goals.sort((a, b) => {
          const progressA =
            a.deposits.reduce((acc, deposit) => acc + deposit.amount, 0) / a.target;
          const progressB =
            b.deposits.reduce((acc, deposit) => acc + deposit.amount, 0) / b.target;
          return progressA - progressB;
        });
        break;
      case 'Amount saved (highest first)':
        goals = goals.sort((a, b) => {
          const amountA = a.deposits.reduce((acc, deposit) => acc + deposit.amount, 0);
          const amountB = b.deposits.reduce((acc, deposit) => acc + deposit.amount, 0);
          return amountB - amountA;
        });
        break;
      case 'Alphabetical (A–Z)':
        goals = goals.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return goals;
  });

  formModel = signal<FormGoal>({
    filter: 'All goals',
    sort: 'Recently added',
  });

  form = form<FormGoal>(this.formModel);

  filterOptions = ['All goals', 'In progress', 'Completed', 'Not started'];
  sortsFilter = [
    'Recently added',
    'Deadline (soonest first)',
    'Progress (highest first)',
    'Progress (lowest first)',
    'Amount saved (highest first)',
    'Alphabetical (A–Z)',
  ];

  onGoalClick(goal: Goal): void {
    this.router.navigate(['/detail', goal.id]);
  }

}

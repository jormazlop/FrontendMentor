import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Goal } from '@shared/model/model';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  private readonly http = inject(HttpClient);
  private readonly _goals = signal<Goal[]>([]);

  goals = this._goals.asReadonly();

  fetchGoals(): void {
    this.http.get<Goal[]>('../data/data.json').subscribe((data) => {
      this._goals.set(data);
    });
  }

  updateGoal(newGoal: Goal): void {
    this._goals.update((goals) => goals.map((goal) => (goal.id === newGoal.id ? newGoal : goal)));
  }

  deleteGoal(deleteGoal: Goal): void {
    this._goals.update((goals) => goals.filter(goal => goal.id !== deleteGoal.id));
  }

  createGoal(newGoal: Goal): void {
    this._goals.update((goals) => [...goals, newGoal]);
  }
}

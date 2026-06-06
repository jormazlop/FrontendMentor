import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@shared/layout/header/header';
import { GoalService } from '@shared/services/goal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('SavingsTracker');

  private readonly service = inject(GoalService);

  constructor() {
    this.service.fetchGoals();
  }
}

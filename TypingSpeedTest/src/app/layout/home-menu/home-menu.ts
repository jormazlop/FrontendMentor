import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonSelect } from '@shared/buttons/button-select/button-select';
import { Difficulty, Mode } from '@shared/models/config.model';
import { AccuracyPipe } from '@shared/pipes/accuracy.pipe';
import { Typing } from '@shared/services/typing';

@Component({
  selector: 'app-home-menu',
  imports: [AccuracyPipe, ButtonSelect, DatePipe],
  templateUrl: './home-menu.html',
  styleUrl: './home-menu.scss',
})
export class HomeMenu {
  private readonly service = inject(Typing);
  private readonly router = inject(Router);

  wpm = this.service.wpm;
  accuracy = this.service.accuracy;
  timer = computed(() => this.service.timer() * 1000);
  timerOn = this.service.timerOn;
  difficulty = this.service.difficulty;
  mode = this.service.mode;

  easy = computed(() => this.difficulty() === 'easy');
  medium = computed(() => this.difficulty() === 'medium');
  hard = computed(() => this.difficulty() === 'hard');

  timed = computed(() => this.mode() === 'timed');
  passage = computed(() => this.mode() === 'passage');

  setDifficulty(difficulty: Difficulty): void {
    this.service.setDifficulty(difficulty);
    this.router.navigate(['/home/not-started']);
  }

  setMode(mode: Mode): void {
    this.service.setMode(mode);
    this.router.navigate(['/home/not-started']);
  }
}

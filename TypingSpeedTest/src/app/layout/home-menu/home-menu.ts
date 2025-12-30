import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonSelect } from '@shared/buttons/button-select/button-select';
import { Difficulty, Timer } from '@shared/models/config.model';
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
  optionsDifficulty = signal(['easy', 'medium', 'hard']);

  mode = this.service.mode;
  optionsMode = signal(['timed(60s)', 'passage']);

  setDifficulty(difficulty: string): void {
    this.service.setDifficulty(difficulty as Difficulty);
    this.router.navigate(['/home/not-started']);
  }

  setMode(mode: string): void {
    this.service.setMode(mode as Timer);
    this.router.navigate(['/home/not-started']);
  }
}

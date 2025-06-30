import { Component, computed, input } from '@angular/core';
import { Selection } from '@shared/models/selection';
import { MoodPipe } from './pipe/mood-pipe';
import { TitleCasePipe } from '@angular/common';
import { KebabCasePipe } from 'home/mood/pipe/kebab-case-pipe';

@Component({
  selector: 'app-mood',
  imports: [MoodPipe, KebabCasePipe, TitleCasePipe],
  templateUrl: './mood.html',
  styleUrl: './mood.scss'
})
export class Mood {
  mood = input.required<Selection>();
  image = computed(() => `/images/icon-${this.mood().step1}-color.svg`);
}

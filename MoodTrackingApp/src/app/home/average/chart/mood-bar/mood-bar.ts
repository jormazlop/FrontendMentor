import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Hours } from '@shared/models/hours-option';
import { Mood } from '@shared/models/mood-option';

@Component({
  selector: 'app-mood-bar',
  imports: [NgClass],
  templateUrl: './mood-bar.html',
  styleUrl: './mood-bar.scss'
})
export class MoodBar {

  hours = input.required<Hours>();

  mood = input.required<Mood>();

  image = computed(() => `/images/icon-${this.mood()}-white.svg`)
}

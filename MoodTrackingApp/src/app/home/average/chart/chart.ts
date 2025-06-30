import { Component, inject } from '@angular/core';
import { MoodBar } from './mood-bar/mood-bar';
import { MoodService } from '@shared/services/mood';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { MoodInfo } from '@shared/models/mood-option';
import { Selection } from '@shared/models/selection';
import { TippyDirective } from '@ngneat/helipopper';
import { KebabCasePipe } from 'home/mood/pipe/kebab-case-pipe';

@Component({
  selector: 'app-chart',
  imports: [MoodBar, DatePipe, TippyDirective, KebabCasePipe, TitleCasePipe],
  templateUrl: './chart.html',
  styleUrl: './chart.scss'
})
export class Chart {

  private service = inject(MoodService);

  data = this.service.data;

  datesToShow: Date[] = [];

  constructor() {

    let today = new Date();

    let date = new Date(today);

    [ ...Array(7) ].forEach((e, i) => {
      this.datesToShow.push(date);
      date = new Date(today.setDate(today.getDate() - 1));
    });

    this.datesToShow = this.datesToShow.reverse();
  }

  getMood(date: Date): MoodInfo | undefined {
    const mood = this.data().find(d => d.date.getDate() == date.getDate());
    return mood;
  }

  setMood(date: Date, mood?: MoodInfo): void {
    this.service.setDate(date);

    if(mood) {
      const selection: Selection = {
        step1: mood.mood,
        step2: mood.feelings,
        step3: mood.journalEntry,
        step4: mood.sleepHours
      };

      this.service.setMood(selection);
    } else {
      this.service.setMood({} as Selection);
    }
  }

}

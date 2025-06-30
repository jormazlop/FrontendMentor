import { Component, inject, model, output } from '@angular/core';
import { MoodOption } from '@shared/models/mood-option';
import { SmallEmoji } from '@shared/emojis/small-emoji/small-emoji';
import { FormsModule } from '@angular/forms';
import { LogMoodService } from 'log-mood/service/log-mood';
import { MoodService } from '@shared/services/mood';
import { TodayPipe } from '@shared/pipes/today-pipe';

@Component({
  selector: 'app-step-1',
  imports: [SmallEmoji, FormsModule, TodayPipe],
  templateUrl: './step-1.html',
  styleUrl: './step-1.scss',
})
export class Step1 {

  private readonly service = inject(LogMoodService);

  private readonly moodService = inject(MoodService);

  date = this.moodService.date;

  options: MoodOption[] = [
    {
      id: 'very-happy',
      title: 'Very Happy',
      options: { path: '/lottie/very-happy.json' },
    },
    {
      id: 'happy',
      title: 'Happy',
      options: { path: '/lottie/happy.json' },
    },
    {
      id: 'neutral',
      title: 'Neutral',
      options: { path: '/lottie/neutral.json' },
    },
    {
      id: 'sad',
      title: 'Sad',
      options: { path: '/lottie/sad.json' },
    },
    {
      id: 'very-sad',
      title: 'Very Sad',
      options: { path: '/lottie/very-sad.json' },
    },
  ];

  onChange(id: string): void {
    this.service.setStep1(id);
  }
}

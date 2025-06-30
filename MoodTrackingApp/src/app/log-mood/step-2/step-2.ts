import { Component, inject } from '@angular/core';
import { LogMoodService } from 'log-mood/service/log-mood';

@Component({
  selector: 'app-step-2',
  imports: [],
  templateUrl: './step-2.html',
  styleUrl: './step-2.scss',
})
export class Step2 {
  private readonly service = inject(LogMoodService);

  tags = [
    'Joyful',
    'Down',
    'Anxious',
    'Calm',
    'Excited',
    'Frustrated',
    'Lonely',
    'Grateful',
    'Overwhelmed',
    'Motivated',
    'Irritable',
    'Peaceful',
    'Tired',
    'Hopeful',
    'Confident',
    'Stressed',
    'Content',
    'Disappointed',
    'Optimistic',
    'Restless',
  ];

  onChange(tag: string, checked: boolean): void {
    this.service.setStep2(tag, checked);
  }
}

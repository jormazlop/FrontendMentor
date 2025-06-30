import { Component, inject } from '@angular/core';
import { LogMoodService } from 'log-mood/service/log-mood';

@Component({
  selector: 'app-step-4',
  imports: [],
  templateUrl: './step-4.html',
  styleUrl: './step-4.scss',
})
export class Step4 {
  private readonly service = inject(LogMoodService);

  options = [
    {
      id: '9 hours',
      title: '9+ hours',
    },
    {
      id: '7-8 hours',
      title: '7-8 hours',
    },
    {
      id: '5-6 hours',
      title: '5-6 hours',
    },
    {
      id: '3-4 hours',
      title: '3-4 hours',
    },
    {
      id: '0-2 hours',
      title: '0-2 hours',
    },
  ];

  onChange(id: string): void {
    this.service.setStep4(id);
  }
}

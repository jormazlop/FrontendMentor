import { Component, effect, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogMoodService } from 'log-mood/service/log-mood';

@Component({
  selector: 'app-step-3',
  imports: [FormsModule],
  templateUrl: './step-3.html',
  styleUrl: './step-3.scss'
})
export class Step3 {

  private readonly service = inject(LogMoodService);

  mood = model('');

  private readonly moodEffect = effect(() => this.service.setStep3(this.mood()));

}

import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { CustomDatePipe } from '@shared/pipes/date-pipe';
import { TodayPipe } from '@shared/pipes/today-pipe';
import { MoodService } from '@shared/services/mood';
import { ProfileService } from '@shared/services/profile';

@Component({
  selector: 'app-title',
  imports: [CustomDatePipe, TodayPipe, TitleCasePipe],
  templateUrl: './title.html',
  styleUrl: './title.scss'
})
export class Title {
  date = inject(MoodService).date;
  private _name = inject(ProfileService).name;
  name = computed(() => this._name().split(' ')[0]);
}
